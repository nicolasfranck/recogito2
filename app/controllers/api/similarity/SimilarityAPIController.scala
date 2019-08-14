package controllers.api.similarity

import com.mohiva.play.silhouette.api.Silhouette
import controllers.{BaseOptAuthController, Security, HasPrettyPrintJSON}
import javax.inject.{Inject, Singleton}
import play.api.Configuration
import play.api.libs.json.Json
import play.api.mvc.ControllerComponents 
import scala.concurrent.{ExecutionContext, Future}
import services.document.DocumentService
import services.user.UserService
import services.similarity.SimilarityService

@Singleton
class SimilarityAPIController @Inject() (
  val components: ControllerComponents,
  val config: Configuration,
  val documents: DocumentService,
  val similarities: SimilarityService,
  val users: UserService,
  val silhouette: Silhouette[Security.Env],
  implicit val ctx: ExecutionContext
) extends BaseOptAuthController(components, config, documents, users) with HasPrettyPrintJSON {

  def getSimilar(docId: String) = silhouette.UserAwareAction.async { implicit request => 
    documentResponse(docId, request.identity, { case (doc, accesslevel) => 
      if (accesslevel.canReadData) {
        similarities.findSimilar(docId, request.identity.map(_.username)).map { response => 
          response.foreach { tuple => 
            play.api.Logger.info(tuple.toString)
          }
          Ok
        }
      } else {
        Future.successful(Forbidden)
      }
    })
  }
  
}
