import {
  ActivatedRouteSnapshot, Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable(
  {providedIn: 'root'}
)
export class AuthenticationGuard {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated) {
      return true;
    }
    else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}


// import {
//   ActivatedRouteSnapshot,
//   GuardResult,
//   MaybeAsync, Router,
//   RouterStateSnapshot
// } from '@angular/router';
// import {Injectable} from "@angular/core";
// import {AuthService} from "../services/auth.service";
// @Injectable()
// export class AuthenticationGuard{
//   constructor(private authService:AuthService,
//               private router : Router) {
//   }
//   canActivate(route: ActivatedRouteSnapshot,
//               state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//     if(this.authService.isAuthenticated){
//       return true;
//     }
//     else{
//       this.router.navigateByUrl("/login");
//       return false;
//     }
//   }
// }
