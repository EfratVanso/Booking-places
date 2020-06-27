import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService:AuthService, private route: Router){
  }

  //use -canLoad- but not -canActivate- becuse the lazy loading
  //we donwd want some pages to be downloaded before authentication.
  canLoad(route: import("@angular/router").Route,
   segments: import("@angular/router").UrlSegment[]):
    boolean | Observable<boolean> | Promise<boolean> 
    {
      if(!this.authService.userIsAuthenticated)
        this.route.navigateByUrl('/auth');
      return this.authService.userIsAuthenticated;
    //throw new Error("Method not implemented.");
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
}
