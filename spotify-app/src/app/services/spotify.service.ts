import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

    constructor(private _http: HttpClient){}

    /**
     * 
     * @param str 
     * @param type 
     * 
     * Returns music according to the search performed and the type indicated (album, artist or track).
     * limit: Maximum number of results to return.
     * offset: The index of the first result to return.
     */
    searchMusic(str: string, type: string, acces_token: string) {
        let searchUrl = `https://api.spotify.com/v1/search?q=${str.search}&type=${type}&market=ES&limit=10&offset=0`;

        let headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${acces_token}`
        });
        
        return this._http.get(searchUrl, { headers: headers });
    }
}