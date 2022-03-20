import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UrlTree | boolean {
    if (route.routeConfig?.path === 'login') {
      if (this.authService.authorized$.value) {
        return this.router.parseUrl('/main');
      } else {
        return false;
      }
    } else {
      if (this.authService.authorized$.value) {
        return true;
      } else {
        return this.router.parseUrl('/login');
      }
    }
  }
}
