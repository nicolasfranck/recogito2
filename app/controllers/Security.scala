package controllers

import jp.t2v.lab.play2.auth.{ AuthConfig, CookieTokenAccessor }
import models.user.Roles._
import models.user.{ UserService, UserWithRoles }
import models.generated.tables.records.{ UserRecord, UserRoleRecord }
import scala.concurrent.{ ExecutionContext, Future }
import scala.reflect.{ ClassTag, classTag }
import play.api.Play
import play.api.cache.CacheApi
import play.api.mvc.{ Result, Results, RequestHeader }

trait Security extends AuthConfig { self: HasDatabase with HasCache with HasApplication =>

  private val NO_PERMISSION = "No permission"

  type Id = String

  type User = UserWithRoles

  type Authority = Role

  val idTag: ClassTag[Id] = classTag[Id]

  val sessionTimeoutInSeconds: Int = 3600

  def resolveUser(id: Id)(implicit ctx: ExecutionContext): Future[Option[User]] =
    UserService.findByUsername(id)(db, cache)

  def loginSucceeded(request: RequestHeader)(implicit ctx: ExecutionContext): Future[Result] = {
    val destination = request.session.get("access_uri").getOrElse(my.routes.MyRecogitoController.my.toString)
    Future.successful(Results.Redirect(destination).withSession(request.session - "access_uri"))
  }

  def logoutSucceeded(request: RequestHeader)(implicit ctx: ExecutionContext): Future[Result] =
    Future.successful(Results.Redirect(landing.routes.LandingController.index))

  def authenticationFailed(request: RequestHeader)(implicit ctx: ExecutionContext): Future[Result] =
    Future.successful(Results.Redirect(landing.routes.LoginLogoutController.showLoginForm).withSession("access_uri" -> request.uri))

  override def authorizationFailed(request: RequestHeader, user: User, authority: Option[Authority])(implicit context: ExecutionContext): Future[Result] =
    Future.successful(Results.Forbidden(NO_PERMISSION))

  def authorize(user: User, authority: Authority)(implicit ctx: ExecutionContext): Future[Boolean] = Future.successful {
    authority match {
      case Normal => true
      case role: Role => user.hasRole(role)
    }
  }

  override lazy val tokenAccessor = new CookieTokenAccessor(
    cookieSecureOption = application.configuration.getBoolean("auth.cookie.secure").getOrElse(false),
    cookieMaxAge       = Some(sessionTimeoutInSeconds)
  )

}
