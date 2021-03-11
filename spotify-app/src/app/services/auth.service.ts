import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  /**
  * Returns the access_token and refresh_token
  */
  getHashParams() {
    let hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);      
    }
    return hashParams;
  }

  /**
   * 
   * @param acces_token 
   * Set access_token on local storage
   */
  setAccessTokenToLocalStorage(acces_token: string) {
    localStorage.setItem('access_token', acces_token);
  }

  /**
   * Get access_token
   */
  getAccessTokenToLocalStorage() {
    return localStorage.getItem('access_token');
  }
}
