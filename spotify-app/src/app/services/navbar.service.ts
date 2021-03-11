import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavBarI } from '../interfaces/navbar';
@Injectable({
    providedIn: 'root'
})
export class NavBarService {

    constructor(private http: HttpClient) {}

    /**
     * Get the nav bar options from navbar.json file
     */
    getNavBarOptions() {
        return this.http.get<NavBarI[]>('/assets/data/navbar.json');
    }
}