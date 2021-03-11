import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NavBarService } from './navbar.service';
import { NavBarI } from '../interfaces/navbar';

describe('NavBarService', () => {
  let service: NavBarService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], 
      providers: [NavBarService]
    });
    service = TestBed.get(NavBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have navBar options', () => {
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

    service.getNavBarOptions().subscribe(options => {
      expect(options).toEqual(navBarOptions);
    });
  });
});
