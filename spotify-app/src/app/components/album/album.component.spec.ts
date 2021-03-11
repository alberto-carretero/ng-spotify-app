import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import { ComponentsModule } from '../components.module';
import { SpotifyService } from 'src/app/services/spotify.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let el: DebugElement;
  let spotifyService: SpotifyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ComponentsModule],
      providers: [SpotifyService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AlbumComponent);
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        spotifyService = TestBed.get(SpotifyService);
        fixture.detectChanges();
      });
  }));

  it('should create', () => {    
    expect(component).toBeTruthy();
  });

  it('should have search music list from API', () => {
    const albums = {
      "albums": {
        "href": "https://api.spotify.com/v1/search?query=shakira&type=album&market=ES&offset=0&limit=10",
        "items": [
          {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5meb7aKE722LA66ssBhvfM"
            },
            "href": "https://api.spotify.com/v1/albums/5meb7aKE722LA66ssBhvfM",
            "id": "5meb7aKE722LA66ssBhvfM",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730da1a7e7f3e9ef163e1c1dbf",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020da1a7e7f3e9ef163e1c1dbf",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048510da1a7e7f3e9ef163e1c1dbf",
                "width": 64
              }
            ],
            "name": "Shakira. (Expanded Edition)",
            "release_date": "2014-03-14",
            "release_date_precision": "day",
            "total_tracks": 15,
            "type": "album",
            "uri": "spotify:album:5meb7aKE722LA66ssBhvfM"
          },
          {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6bUxh58rYTL67FS8dyTKMN"
            },
            "href": "https://api.spotify.com/v1/albums/6bUxh58rYTL67FS8dyTKMN",
            "id": "6bUxh58rYTL67FS8dyTKMN",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273d05d3aad30c5fb7614893cf5",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02d05d3aad30c5fb7614893cf5",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851d05d3aad30c5fb7614893cf5",
                "width": 64
              }
            ],
            "name": "El Dorado",
            "release_date": "2017-05-26",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:6bUxh58rYTL67FS8dyTKMN"
          },
          {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2R21vXR83lH98kGeO99Y66"
                },
                "href": "https://api.spotify.com/v1/artists/2R21vXR83lH98kGeO99Y66",
                "id": "2R21vXR83lH98kGeO99Y66",
                "name": "Anuel AA",
                "type": "artist",
                "uri": "spotify:artist:2R21vXR83lH98kGeO99Y66"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4IcQ1ni07PmlOenqwf6MgG"
            },
            "href": "https://api.spotify.com/v1/albums/4IcQ1ni07PmlOenqwf6MgG",
            "id": "4IcQ1ni07PmlOenqwf6MgG",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e71aaa885c4df5f0a92eab12",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02e71aaa885c4df5f0a92eab12",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851e71aaa885c4df5f0a92eab12",
                "width": 64
              }
            ],
            "name": "Me Gusta",
            "release_date": "2020-01-13",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:4IcQ1ni07PmlOenqwf6MgG"
          },
          {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5hcKSTqKOLuzJgYIQileAe"
            },
            "href": "https://api.spotify.com/v1/albums/5hcKSTqKOLuzJgYIQileAe",
            "id": "5hcKSTqKOLuzJgYIQileAe",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273bfcff1dd252b22bba16a2a5d",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02bfcff1dd252b22bba16a2a5d",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851bfcff1dd252b22bba16a2a5d",
                "width": 64
              }
            ],
            "name": "Donde Estan Los Ladrones",
            "release_date": "1998-09-29",
            "release_date_precision": "day",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:5hcKSTqKOLuzJgYIQileAe"
          },
          {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/65GDNtLQdPv30IljvoE2KW"
                },
                "href": "https://api.spotify.com/v1/artists/65GDNtLQdPv30IljvoE2KW",
                "id": "65GDNtLQdPv30IljvoE2KW",
                "name": "Maki",
                "type": "artist",
                "uri": "spotify:artist:65GDNtLQdPv30IljvoE2KW"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3RaPHdbOVsUjPFljce9rEz"
                },
                "href": "https://api.spotify.com/v1/artists/3RaPHdbOVsUjPFljce9rEz",
                "id": "3RaPHdbOVsUjPFljce9rEz",
                "name": "Shakira Martínez",
                "type": "artist",
                "uri": "spotify:artist:3RaPHdbOVsUjPFljce9rEz"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1LpTrOeaz1fFUxeOehPig8"
            },
            "href": "https://api.spotify.com/v1/albums/1LpTrOeaz1fFUxeOehPig8",
            "id": "1LpTrOeaz1fFUxeOehPig8",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27320156d496ead4a7ef29b5b7e",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0220156d496ead4a7ef29b5b7e",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485120156d496ead4a7ef29b5b7e",
                "width": 64
              }
            ],
            "name": "Hasta el infinito (feat. Shakira Martínez)",
            "release_date": "2020-09-11",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:1LpTrOeaz1fFUxeOehPig8"
          },
          {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3ZHU5AKrUmIPnCFfr82QER"
                },
                "href": "https://api.spotify.com/v1/artists/3ZHU5AKrUmIPnCFfr82QER",
                "id": "3ZHU5AKrUmIPnCFfr82QER",
                "name": "1nonly",
                "type": "artist",
                "uri": "spotify:artist:3ZHU5AKrUmIPnCFfr82QER"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4PfKPdq8QEgcerLwGApWIp"
                },
                "href": "https://api.spotify.com/v1/artists/4PfKPdq8QEgcerLwGApWIp",
                "id": "4PfKPdq8QEgcerLwGApWIp",
                "name": "EGOVERT",
                "type": "artist",
                "uri": "spotify:artist:4PfKPdq8QEgcerLwGApWIp"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5zm4UI8YxNztYzV3NASIH6"
            },
            "href": "https://api.spotify.com/v1/albums/5zm4UI8YxNztYzV3NASIH6",
            "id": "5zm4UI8YxNztYzV3NASIH6",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27338f41314208b539076de52f2",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0238f41314208b539076de52f2",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485138f41314208b539076de52f2",
                "width": 64
              }
            ],
            "name": "Shakira!",
            "release_date": "2020-11-06",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:5zm4UI8YxNztYzV3NASIH6"
          },
          {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3gR578qnw47M30LVBTjrlW"
            },
            "href": "https://api.spotify.com/v1/albums/3gR578qnw47M30LVBTjrlW",
            "id": "3gR578qnw47M30LVBTjrlW",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2734214ddc9e33e76de6a8ee888",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e024214ddc9e33e76de6a8ee888",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048514214ddc9e33e76de6a8ee888",
                "width": 64
              }
            ],
            "name": "Sale el Sol",
            "release_date": "2010-10-19",
            "release_date_precision": "day",
            "total_tracks": 16,
            "type": "album",
            "uri": "spotify:album:3gR578qnw47M30LVBTjrlW"
          },
          {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3zHPYwiMJqa3hTBgk695Ae"
            },
            "href": "https://api.spotify.com/v1/albums/3zHPYwiMJqa3hTBgk695Ae",
            "id": "3zHPYwiMJqa3hTBgk695Ae",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f342e70aacda9d78cfb6ce7a",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f342e70aacda9d78cfb6ce7a",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f342e70aacda9d78cfb6ce7a",
                "width": 64
              }
            ],
            "name": "Fijación Oral, Vol. 1",
            "release_date": "2005-06-03",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:3zHPYwiMJqa3hTBgk695Ae"
          },
          {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5ppnlEoj4HdRRdRihnY3jU"
            },
            "href": "https://api.spotify.com/v1/albums/5ppnlEoj4HdRRdRihnY3jU",
            "id": "5ppnlEoj4HdRRdRihnY3jU",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27327ddd747545c0d0cfe7595fa",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0227ddd747545c0d0cfe7595fa",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485127ddd747545c0d0cfe7595fa",
                "width": 64
              }
            ],
            "name": "Oral Fixation, Vol. 2 (Expanded Edition)",
            "release_date": "2005-11-28",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:5ppnlEoj4HdRRdRihnY3jU"
          },
          {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
                },
                "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
                "id": "0EmeFodog0BfCgMzAIvKQp",
                "name": "Shakira",
                "type": "artist",
                "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4DyMK9x2gnmRkRa16zHaEV"
            },
            "href": "https://api.spotify.com/v1/albums/4DyMK9x2gnmRkRa16zHaEV",
            "id": "4DyMK9x2gnmRkRa16zHaEV",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2731f400a1f4d821b00824cf58f",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e021f400a1f4d821b00824cf58f",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048511f400a1f4d821b00824cf58f",
                "width": 64
              }
            ],
            "name": "Laundry Service",
            "release_date": "2001-11-13",
            "release_date_precision": "day",
            "total_tracks": 13,
            "type": "album",
            "uri": "spotify:album:4DyMK9x2gnmRkRa16zHaEV"
          }
        ],
        "limit": 10,
        "next": "https://api.spotify.com/v1/search?query=shakira&type=album&market=ES&offset=10&limit=10",
        "offset": 0,
        "previous": null,
        "total": 573
      }
    };
    const searchStr = 'shakira';
    const type = 'album';
    const access_token = 'BQDymZpA5CY9Xblg0rGuuZxe1AZWoTLLKD0rAaxBUa67W1T4rq2KRPJ4vNs3Aep-zElNrQYWbToEdcznJ7Yjmlo41HNwjmu0pgAfa5tavFRmSgVYTn_GgBMZa2_v11RiEhmieXUqX5jqO-nhcPWzYTe7ZaQ7q1794BX8XUGglsqCp5if_3EnQpW61gw';

    spotifyService.searchMusic(searchStr, type, access_token).subscribe(data => {
      expect(data).toBe(10);
      expect(data).toEqual(albums);
    });
  });
});
