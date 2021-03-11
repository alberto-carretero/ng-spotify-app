import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/services/navbar.service';
import { NavBarI } from 'src/app/interfaces/navbar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navBarOptions: Observable<NavBarI[]>;

  constructor(private navBarService: NavBarService) { }

  /**
  * Calls the getNavBarOptions method of the navBarService to obtain the nav bar options from navbar.json file
  */
  ngOnInit() {
    this.navBarOptions = this.navBarService.getNavBarOptions();
  }
}
