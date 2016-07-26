package controllers.document

import controllers.{ BaseAuthController, ControllerContext }
import java.io.File
import javax.inject.Inject
import models.user.Roles._
import play.api.mvc.Action
import storage.FileAccess

class DocumentController @Inject() (implicit val ctx: ControllerContext) extends BaseAuthController with FileAccess {
    
  def initialView(docId: String) = Action {
    Redirect(controllers.document.annotation.routes.AnnotationController.showAnnotationViewForDocPart(docId, 1))
  }
  
  def getImageTile(docId: String, partNo: Int, tilepath: String) = AsyncStack(AuthorityKey -> Normal) { implicit request =>
    documentPartResponse(docId, partNo, loggedIn.user.getUsername, { case (document, fileparts, filepart, accesslevel) =>
      // ownerDataDir must exist, unless DB integrity is broken - renderDocumentResponse will handle the exception if .get fails
      val documentDir = getDocumentDir(document.getOwner, document.getId).get
      
      // Tileset foldername is, by convention, equal to filename minus extension
      val foldername = filepart.getFilename.substring(0, filepart.getFilename.lastIndexOf('.'))
      val tileFolder = new File(documentDir, foldername)
      
      val file = new File(tileFolder, tilepath)
      if (file.exists)
        Ok.sendFile(file)
      else
        NotFoundPage
    })
  }
  
  def getThumbnail(docId: String, partNo: Int) = AsyncStack(AuthorityKey -> Normal) { implicit request =>
    documentPartResponse(docId, partNo, loggedIn.user.getUsername, { case (document, fileparts, filepart, accesslevel) =>
      openThumbnail(loggedIn.user.getUsername, docId, filepart.getFilename) match {
        case Some(file) => Ok.sendFile(file)
        case None => NotFoundPage
      }
    })
  }
  
}