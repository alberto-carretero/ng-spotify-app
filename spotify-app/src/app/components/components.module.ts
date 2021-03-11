import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { InfoItemComponent } from './info-item/info-item.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  exports: [SearchComponent, NavbarComponent, InfoItemComponent, AlbumComponent, ArtistComponent, TrackComponent],
  declarations: [SearchComponent, InfoItemComponent, NavbarComponent, AlbumComponent, ArtistComponent, TrackComponent]
})
export class ComponentsModule { }