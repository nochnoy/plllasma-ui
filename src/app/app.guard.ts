import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<UrlTree | boolean> {
    if (route.routeConfig?.path === 'login') {
      if (this.authService.authorized$.value) {
        return of (this.router.parseUrl(''));
      } else {
        return false;
      }
    } else {
      if (this.authService.authorized$.value) {
        return true;
      } else {
        return of(this.router.parseUrl('/login'));
      }
    }
  }
}
