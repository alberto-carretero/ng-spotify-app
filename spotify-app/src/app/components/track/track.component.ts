import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  public access_token = '';
  public tracks = [];
  
  private subscriptions = new Subscription();

  constructor(private _spotifyService: SpotifyService, private _authService: AuthService, private cd: ChangeDetectorRef) {}

  /**
   * Get access token from local storage
   */
  ngOnInit() {
    this.access_token = this._authService.getAccessTokenToLocalStorage();
  }

  /**
   * 
   * @param searchStr 
   * Returns the list of songs
   */
  searchMusic(searchStr: string) {
    this.subscriptions.add(this._spotifyService.searchMusic(searchStr, 'track', this.access_token).subscribe(data => {
      this.tracks = data['tracks'].items;
      this.cd.detectChanges();
    }));
  }

  /**
   * Destroy the track component and unsubscribe of all subscriptions
   */
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}