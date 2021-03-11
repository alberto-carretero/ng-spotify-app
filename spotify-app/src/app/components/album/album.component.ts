import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {
  public access_token = '';
  public albums = [];
  
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
   * Returns the list of albums
   */
  searchMusic(searchStr: string) {
    this.subscriptions.add(this._spotifyService.searchMusic(searchStr, 'album', this.access_token).subscribe(data => {
      this.albums = data['albums'].items;
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
