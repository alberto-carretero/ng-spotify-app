import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private acces_token = '';

  constructor(private _authService: AuthService, private _router: Router) {}

  /**
   * 
   * @param next 
   * @param state
   * If we have the access token, the application will allow us to access the home page
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const params = this._authService.getHashParams();   
     
      for(let item in params) {
        if(item == 'access_token') {
          this.acces_token = params[item];          
        }
      }

      if(!this.acces_token) {        
        return false;
      } 

      this._authService.setAccessTokenToLocalStorage(this.acces_token);
      return true;
  }
}
