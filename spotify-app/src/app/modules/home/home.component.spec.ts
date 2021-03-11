import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentsModule } from 'src/app/components/components.module';
import { DebugElement } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;
  let spotifyService: SpotifyService;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ HttpClientTestingModule, RouterTestingModule, ComponentsModule ],
      providers: [SpotifyService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        spotifyService = TestBed.get(SpotifyService);
        fixture.detectChanges();
      });
  }));

  it('should create', () => {    
    expect(component).toBeTruthy();
  });
});