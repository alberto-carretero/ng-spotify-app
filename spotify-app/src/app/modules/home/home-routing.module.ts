import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AlbumComponent } from 'src/app/components/album/album.component';
import { ArtistComponent } from 'src/app/components/artist/artist.component';
import { TrackComponent } from 'src/app/components/track/track.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'album',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'album',
        component: AlbumComponent
      },
      {
        path: 'artist',
        component: ArtistComponent
      },
      {
        path: 'track',
        component: TrackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
