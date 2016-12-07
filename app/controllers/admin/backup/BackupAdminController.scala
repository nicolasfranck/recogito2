package controllers.admin.backup

import akka.actor.ActorSystem
import controllers.{ BaseAuthController, WebJarAssets }
import controllers.document.BackupReader
import javax.inject.Inject
import models.ContentType
import models.annotation.AnnotationService
import models.document.DocumentService
import models.generated.tables.records.DocumentFilepartRecord
import models.user.UserService
import models.user.Roles._
import play.api.Configuration
import scala.concurrent.{ ExecutionContext, Future }
import controllers.my.upload.tiling.TilingService
  
class BackupAdminController @Inject() (
    val config: Configuration,
    val users: UserService,
    val tilingService: TilingService,
    implicit val annotations: AnnotationService,
    implicit val documents: DocumentService,
    implicit val ctx: ExecutionContext,
    implicit val system: ActorSystem,
    implicit val webjars: WebJarAssets
  ) extends BaseAuthController(config, documents, users) with BackupReader {
  
  def index = StackAction(AuthorityKey -> Admin) { implicit request => 
    Ok(views.html.admin.backup.index())
  }
  
  def restore = AsyncStack(AuthorityKey -> Admin) { implicit request =>
    
    request.body.asMultipartFormData.flatMap(_.file("backup")) match {
      case Some(formData) =>
        restoreBackup(formData.ref.file, runAsAdmin = true, forcedOwner = None).map { case (doc, fileparts) =>
          val images = fileparts.filter(_.getContentType.equals(ContentType.IMAGE_UPLOAD.toString))
          
          if (images.size > 0) 
            tilingService.spawnTask(doc, images)
            
          Redirect(routes.BackupAdminController.index)
          
        }.recover { case t: Throwable =>
          t.printStackTrace()
          InternalServerError
        }
        
      case None => 
        Future.successful(BadRequest)
    }
    
  }
  
}