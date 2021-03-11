import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtistComponent {
  public access_token = '';
  public artists = [];
  
  private subscriptions = new Subscription();

  constructor(private _spotifyService: SpotifyService, private _authService: AuthService, private cd: ChangeDetectorRef) { }

  /**
   * Get access token from local storage
   */
  ngOnInit() {
    this.access_token = this._authService.getAccessTokenToLocalStorage()
  }

  /**
   * 
   * @param searchStr 
   * Returns the list of artist
   */
  searchMusic(searchStr: string) {
    this.subscriptions.add(this._spotifyService.searchMusic(searchStr, 'artist', this.access_token).subscribe(data => {
      this.artists = data['artists'].items;
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