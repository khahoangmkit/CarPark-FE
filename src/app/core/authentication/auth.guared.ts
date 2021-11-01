import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { of } from "rxjs";
import { Observable } from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {AppConstant} from "../../_constant/app-constant";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const isLogged = this.cookieService.get(AppConstant.ACCESS_TOKEN);
    if(!isLogged) {
      this.router.navigate(['auth/login'])
      return false;
    }
    return true;
  }
}
