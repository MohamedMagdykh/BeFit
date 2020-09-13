import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from  'src/app/Service//auth.service';
@Injectable({
  providedIn: 'root'
})

export class BodygardGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.auth.IsLoggedIn()) {
        return true;
      }
      document.getElementById("logshow").click();
      
      return false;
  }
  
  
}
