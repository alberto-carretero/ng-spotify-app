import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NavbarComponent } from "./navbar.component";
import { NavBarService } from "src/app/services/navbar.service";
import { NavBarI } from "src/app/interfaces/navbar";
import { RouterModule } from "@angular/router";

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let el: DebugElement;
  let navBarService: NavBarService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [HttpClientTestingModule, RouterModule],
      providers: [NavBarService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        navBarService = TestBed.get(NavBarService);
        fixture.detectChanges();
      });
  }));

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should have search music list from API', () => {
    const navBarOptions: NavBarI[] = [
      {
        "name": "Option 1",
        "redirectTo": "option-one"
      },
      {
        "name": "Option 2",
        "redirectTo": "option-two"
      },
      {
        "name": "Option 3",
        "redirectTo": "option-three"
      }
    ];

    navBarService.getNavBarOptions().subscribe(options => {
      expect(options).toEqual(navBarOptions);
    });
  });
});
