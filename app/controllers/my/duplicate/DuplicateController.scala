package controllers.my.duplicate

import controllers.{Security, HasPrettyPrintJSON}
import com.mohiva.play.silhouette.api.Silhouette
import javax.inject.{Inject, Singleton}
import play.api.mvc.{AbstractController, ControllerComponents}
import scala.concurrent.{ExecutionContext, Future}
import services.document.DocumentService

@Singleton
class DuplicateController @Inject() (
  components: ControllerComponents,
  silhouette: Silhouette[Security.Env], 
  documentService: DocumentService,
  implicit val ctx: ExecutionContext
) extends AbstractController(components) with HasPrettyPrintJSON {
  
  /** API method to create a copy of a document in the workspace **/
  def duplicateDocument(id: String) = silhouette.SecuredAction.async { implicit request => 
    documentService.getExtendedMeta(id: String, Some(request.identity.username)).flatMap { _ match { 
      case Some((doc, accesslevel)) =>
        if (accesslevel.canReadAll) // Read access is sufficient to duplicate a document
          documentService.duplicateDocument(doc.document, doc.fileparts).map { _ => 

            // TODO 
            
            Ok 
          }
        else
          Future.successful(Forbidden)

      case None => Future.successful(NotFound)
    }}
  }

}