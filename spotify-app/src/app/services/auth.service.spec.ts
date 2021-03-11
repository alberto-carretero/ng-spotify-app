import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], 
      providers: [AuthService]
    });
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAccessTokenToLocalStorage function', () => {
    expect(service.getAccessTokenToLocalStorage).toBeTruthy();
  });

  it('should have HashParams from url', () => {
    expect(service.getHashParams).toBeTruthy();
  });
  
});