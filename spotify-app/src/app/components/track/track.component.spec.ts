import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentsModule } from "../components.module";
import { TrackComponent } from "./track.component";

describe('TrackComponent', () => {
  let component: TrackComponent;
  let fixture: ComponentFixture<TrackComponent>;
  let el: DebugElement;
  let spotifyService: SpotifyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ComponentsModule],
      providers: [SpotifyService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TrackComponent);
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
    const tracks = {
      "tracks": {
        "href": "https://api.spotify.com/v1/search?query=shakira&type=track&market=ES&offset=0&limit=10",
        "items": [
          {
            "album": {
              "album_type": "album",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "https://open.spotify.com/artist/1yxSLGMDHlW21z4YXirZDS"
                  },
                  "href": "https://api.spotify.com/v1/artists/1yxSLGMDHlW21z4YXirZDS",
                  "id": "1yxSLGMDHlW21z4YXirZDS",
                  "name": "Black Eyed Peas",
                  "type": "artist",
                  "uri": "spotify:artist:1yxSLGMDHlW21z4YXirZDS"
                }
              ],
              "external_urls": {
                "spotify": "https://open.spotify.com/album/0uxvuY8Ek2ojzHrWTg2PDc"
              },
              "href": "https://api.spotify.com/v1/albums/0uxvuY8Ek2ojzHrWTg2PDc",
              "id": "0uxvuY8Ek2ojzHrWTg2PDc",
              "images": [
                {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b2735a7f21dad5c796d719650972",
                  "width": 640
                },
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e025a7f21dad5c796d719650972",
                  "width": 300
                },
                {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d000048515a7f21dad5c796d719650972",
                  "width": 64
                }
              ],
              "name": "TRANSLATION",
              "release_date": "2020-11-02",
              "release_date_precision": "day",
              "total_tracks": 15,
              "type": "album",
              "uri": "spotify:album:0uxvuY8Ek2ojzHrWTg2PDc"
            },
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1yxSLGMDHlW21z4YXirZDS"
                },
                "href": "https://api.spotify.com/v1/artists/1yxSLGMDHlW21z4YXirZDS",
                "id": "1yxSLGMDHlW21z4YXirZDS",
                "name": "Black Eyed Peas",
                "type": "artist",
                "uri": "spotify:artist:1yxSLGMDHlW21z4YXirZDS"
              },
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
            "disc_number": 1,
            "duration_ms": 222522,
            "explicit": true,
            "external_ids": {
              "isrc": "USSM12003440"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/1zLBsSVxETQOfINOLYvT5m"
            },
            "href": "https://api.spotify.com/v1/tracks/1zLBsSVxETQOfINOLYvT5m",
            "id": "1zLBsSVxETQOfINOLYvT5m",
            "is_local": false,
            "is_playable": true,
            "name": "GIRL LIKE ME",
            "popularity": 88,
            "preview_url": "https://p.scdn.co/mp3-preview/7c7a0fef4a5d521d679d4dde892f09b2fa7f9719?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 4,
            "type": "track",
            "uri": "spotify:track:1zLBsSVxETQOfINOLYvT5m"
          },
          {
            "album": {
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
            "disc_number": 1,
            "duration_ms": 190570,
            "explicit": false,
            "external_ids": {
              "isrc": "USQX92000112"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/5Xhqh4lwJPtMUTsdBztN1a"
            },
            "href": "https://api.spotify.com/v1/tracks/5Xhqh4lwJPtMUTsdBztN1a",
            "id": "5Xhqh4lwJPtMUTsdBztN1a",
            "is_local": false,
            "is_playable": true,
            "name": "Me Gusta",
            "popularity": 76,
            "preview_url": "https://p.scdn.co/mp3-preview/5192e13f69683dae143271829cede1ab62724078?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:5Xhqh4lwJPtMUTsdBztN1a"
          },
          {
            "album": {
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
            "disc_number": 1,
            "duration_ms": 149603,
            "explicit": true,
            "external_ids": {
              "isrc": "TCAFF2047549"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/7inpAMz5d1txuoHgu1A0HQ"
            },
            "href": "https://api.spotify.com/v1/tracks/7inpAMz5d1txuoHgu1A0HQ",
            "id": "7inpAMz5d1txuoHgu1A0HQ",
            "is_local": false,
            "is_playable": true,
            "name": "Shakira!",
            "popularity": 67,
            "preview_url": "https://p.scdn.co/mp3-preview/3a217c7bcf4a34be5d135356eb0120c1c53ac571?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:7inpAMz5d1txuoHgu1A0HQ"
          },
          {
            "album": {
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
            "disc_number": 1,
            "duration_ms": 203913,
            "explicit": false,
            "external_ids": {
              "isrc": "ES5152000919"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/41GzNts7ase8m7bxusNcyJ"
            },
            "href": "https://api.spotify.com/v1/tracks/41GzNts7ase8m7bxusNcyJ",
            "id": "41GzNts7ase8m7bxusNcyJ",
            "is_local": false,
            "is_playable": true,
            "name": "Hasta el infinito (feat. Shakira Martínez)",
            "popularity": 56,
            "preview_url": "https://p.scdn.co/mp3-preview/36f792346440eb2ba9ef1a139f601b54aa255241?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 1,
            "type": "track",
            "uri": "spotify:track:41GzNts7ase8m7bxusNcyJ"
          },
          {
            "album": {
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
                  "spotify": "https://open.spotify.com/artist/7aBzpmFXB4WWpPl2F7RjBe"
                },
                "href": "https://api.spotify.com/v1/artists/7aBzpmFXB4WWpPl2F7RjBe",
                "id": "7aBzpmFXB4WWpPl2F7RjBe",
                "name": "Wyclef Jean",
                "type": "artist",
                "uri": "spotify:artist:7aBzpmFXB4WWpPl2F7RjBe"
              }
            ],
            "disc_number": 1,
            "duration_ms": 218093,
            "explicit": false,
            "external_ids": {
              "isrc": "USSM10600677"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/3ZFTkvIE7kyPt6Nu3PEa7V"
            },
            "href": "https://api.spotify.com/v1/tracks/3ZFTkvIE7kyPt6Nu3PEa7V",
            "id": "3ZFTkvIE7kyPt6Nu3PEa7V",
            "is_local": false,
            "is_playable": true,
            "name": "Hips Don't Lie (feat. Wyclef Jean)",
            "popularity": 83,
            "preview_url": "https://p.scdn.co/mp3-preview/3859547944f57cfb7b996f6551148c9467889d4b?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:3ZFTkvIE7kyPt6Nu3PEa7V"
          },
          {
            "album": {
              "album_type": "album",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "https://open.spotify.com/artist/4vhNDa5ycK0ST968ek7kRr"
                  },
                  "href": "https://api.spotify.com/v1/artists/4vhNDa5ycK0ST968ek7kRr",
                  "id": "4vhNDa5ycK0ST968ek7kRr",
                  "name": "Carlos Vives",
                  "type": "artist",
                  "uri": "spotify:artist:4vhNDa5ycK0ST968ek7kRr"
                }
              ],
              "external_urls": {
                "spotify": "https://open.spotify.com/album/57giaIaMyAVCS7jMIaoIgK"
              },
              "href": "https://api.spotify.com/v1/albums/57giaIaMyAVCS7jMIaoIgK",
              "id": "57giaIaMyAVCS7jMIaoIgK",
              "images": [
                {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b273575fb66ec11e54fb68d548a5",
                  "width": 640
                },
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02575fb66ec11e54fb68d548a5",
                  "width": 300
                },
                {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d00004851575fb66ec11e54fb68d548a5",
                  "width": 64
                }
              ],
              "name": "VIVES",
              "release_date": "2017-11-10",
              "release_date_precision": "day",
              "total_tracks": 18,
              "type": "album",
              "uri": "spotify:album:57giaIaMyAVCS7jMIaoIgK"
            },
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4vhNDa5ycK0ST968ek7kRr"
                },
                "href": "https://api.spotify.com/v1/artists/4vhNDa5ycK0ST968ek7kRr",
                "id": "4vhNDa5ycK0ST968ek7kRr",
                "name": "Carlos Vives",
                "type": "artist",
                "uri": "spotify:artist:4vhNDa5ycK0ST968ek7kRr"
              },
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
            "disc_number": 1,
            "duration_ms": 229509,
            "explicit": false,
            "external_ids": {
              "isrc": "USSD11600112"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/0Gx4VrHzS7pZOEAGrmXXBH"
            },
            "href": "https://api.spotify.com/v1/tracks/0Gx4VrHzS7pZOEAGrmXXBH",
            "id": "0Gx4VrHzS7pZOEAGrmXXBH",
            "is_local": false,
            "is_playable": true,
            "name": "La Bicicleta",
            "popularity": 73,
            "preview_url": "https://p.scdn.co/mp3-preview/0325448b381eb1e0f2a40ed156573edd49f3f050?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 12,
            "type": "track",
            "uri": "spotify:track:0Gx4VrHzS7pZOEAGrmXXBH"
          },
          {
            "album": {
              "album_type": "album",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "https://open.spotify.com/artist/7okwEbXzyT2VffBmyQBWLz"
                  },
                  "href": "https://api.spotify.com/v1/artists/7okwEbXzyT2VffBmyQBWLz",
                  "id": "7okwEbXzyT2VffBmyQBWLz",
                  "name": "Maná",
                  "type": "artist",
                  "uri": "spotify:artist:7okwEbXzyT2VffBmyQBWLz"
                }
              ],
              "external_urls": {
                "spotify": "https://open.spotify.com/album/36lGlwe75fTsr4CLVlfYQa"
              },
              "href": "https://api.spotify.com/v1/albums/36lGlwe75fTsr4CLVlfYQa",
              "id": "36lGlwe75fTsr4CLVlfYQa",
              "images": [
                {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b273e7b7c3a49b7a0e2b39c5831a",
                  "width": 640
                },
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02e7b7c3a49b7a0e2b39c5831a",
                  "width": 300
                },
                {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d00004851e7b7c3a49b7a0e2b39c5831a",
                  "width": 64
                }
              ],
              "name": "Cama Incendiada",
              "release_date": "2015-04-21",
              "release_date_precision": "day",
              "total_tracks": 11,
              "type": "album",
              "uri": "spotify:album:36lGlwe75fTsr4CLVlfYQa"
            },
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7okwEbXzyT2VffBmyQBWLz"
                },
                "href": "https://api.spotify.com/v1/artists/7okwEbXzyT2VffBmyQBWLz",
                "id": "7okwEbXzyT2VffBmyQBWLz",
                "name": "Maná",
                "type": "artist",
                "uri": "spotify:artist:7okwEbXzyT2VffBmyQBWLz"
              },
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
            "disc_number": 1,
            "duration_ms": 272576,
            "explicit": false,
            "external_ids": {
              "isrc": "MXF151400804"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/3YmA3gZqlXl0MkwhkVKxRy"
            },
            "href": "https://api.spotify.com/v1/tracks/3YmA3gZqlXl0MkwhkVKxRy",
            "id": "3YmA3gZqlXl0MkwhkVKxRy",
            "is_local": false,
            "is_playable": true,
            "name": "Mi Verdad (feat. Shakira)",
            "popularity": 68,
            "preview_url": "https://p.scdn.co/mp3-preview/1209cc4ba41438680bf203e63a9364715ba13b55?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 6,
            "type": "track",
            "uri": "spotify:track:3YmA3gZqlXl0MkwhkVKxRy"
          },
          {
            "album": {
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
                  "spotify": "https://open.spotify.com/artist/5sUrlPAHlS9NEirDB8SEbF"
                },
                "href": "https://api.spotify.com/v1/artists/5sUrlPAHlS9NEirDB8SEbF",
                "id": "5sUrlPAHlS9NEirDB8SEbF",
                "name": "Alejandro Sanz",
                "type": "artist",
                "uri": "spotify:artist:5sUrlPAHlS9NEirDB8SEbF"
              }
            ],
            "disc_number": 1,
            "duration_ms": 212893,
            "explicit": false,
            "external_ids": {
              "isrc": "USSM10501700"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/5BSclXJTa9B0iURhUjZo50"
            },
            "href": "https://api.spotify.com/v1/tracks/5BSclXJTa9B0iURhUjZo50",
            "id": "5BSclXJTa9B0iURhUjZo50",
            "is_local": false,
            "is_playable": true,
            "name": "La Tortura (feat. Alejandro Sanz)",
            "popularity": 72,
            "preview_url": "https://p.scdn.co/mp3-preview/e62ae4649f0297290113b10afeaa1744c0e9b06e?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 3,
            "type": "track",
            "uri": "spotify:track:5BSclXJTa9B0iURhUjZo50"
          },
          {
            "album": {
              "album_type": "album",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "https://open.spotify.com/artist/3MHaV05u0io8fQbZ2XPtlC"
                  },
                  "href": "https://api.spotify.com/v1/artists/3MHaV05u0io8fQbZ2XPtlC",
                  "id": "3MHaV05u0io8fQbZ2XPtlC",
                  "name": "Prince Royce",
                  "type": "artist",
                  "uri": "spotify:artist:3MHaV05u0io8fQbZ2XPtlC"
                }
              ],
              "external_urls": {
                "spotify": "https://open.spotify.com/album/7fIqsFfeYEEP9RO25KHj8P"
              },
              "href": "https://api.spotify.com/v1/albums/7fIqsFfeYEEP9RO25KHj8P",
              "id": "7fIqsFfeYEEP9RO25KHj8P",
              "images": [
                {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b2736c1180ae683cc09d840a9163",
                  "width": 640
                },
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e026c1180ae683cc09d840a9163",
                  "width": 300
                },
                {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d000048516c1180ae683cc09d840a9163",
                  "width": 64
                }
              ],
              "name": "FIVE (Deluxe Edition)",
              "release_date": "2017-02-24",
              "release_date_precision": "day",
              "total_tracks": 18,
              "type": "album",
              "uri": "spotify:album:7fIqsFfeYEEP9RO25KHj8P"
            },
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3MHaV05u0io8fQbZ2XPtlC"
                },
                "href": "https://api.spotify.com/v1/artists/3MHaV05u0io8fQbZ2XPtlC",
                "id": "3MHaV05u0io8fQbZ2XPtlC",
                "name": "Prince Royce",
                "type": "artist",
                "uri": "spotify:artist:3MHaV05u0io8fQbZ2XPtlC"
              },
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
            "disc_number": 1,
            "duration_ms": 196480,
            "explicit": false,
            "external_ids": {
              "isrc": "USSD11600438"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/46HdsiK0uR26B2dY9QPzda"
            },
            "href": "https://api.spotify.com/v1/tracks/46HdsiK0uR26B2dY9QPzda",
            "id": "46HdsiK0uR26B2dY9QPzda",
            "is_local": false,
            "is_playable": true,
            "name": "Deja vu",
            "popularity": 68,
            "preview_url": "https://p.scdn.co/mp3-preview/e2a1548c47824ce5b5adcd52a5f55145ce65e205?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 6,
            "type": "track",
            "uri": "spotify:track:46HdsiK0uR26B2dY9QPzda"
          },
          {
            "album": {
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
                  "spotify": "https://open.spotify.com/artist/1SupJlEpv7RS2tPNRaHViT"
                },
                "href": "https://api.spotify.com/v1/artists/1SupJlEpv7RS2tPNRaHViT",
                "id": "1SupJlEpv7RS2tPNRaHViT",
                "name": "Nicky Jam",
                "type": "artist",
                "uri": "spotify:artist:1SupJlEpv7RS2tPNRaHViT"
              }
            ],
            "disc_number": 1,
            "duration_ms": 195213,
            "explicit": false,
            "external_ids": {
              "isrc": "USSD11700143"
            },
            "external_urls": {
              "spotify": "https://open.spotify.com/track/70lnL3QaSOIIyMa2X9aVRL"
            },
            "href": "https://api.spotify.com/v1/tracks/70lnL3QaSOIIyMa2X9aVRL",
            "id": "70lnL3QaSOIIyMa2X9aVRL",
            "is_local": false,
            "is_playable": true,
            "name": "Perro Fiel (feat. Nicky Jam)",
            "popularity": 69,
            "preview_url": "https://p.scdn.co/mp3-preview/563a0140deefc0d24f2ccceca5b1710b46993de2?cid=aaebc9bd19004fb6a10cac2257edd060",
            "track_number": 6,
            "type": "track",
            "uri": "spotify:track:70lnL3QaSOIIyMa2X9aVRL"
          }
        ],
        "limit": 10,
        "next": "https://api.spotify.com/v1/search?query=shakira&type=track&market=ES&offset=10&limit=10",
        "offset": 0,
        "previous": null,
        "total": 4543
      }
    };
    const searchStr = 'shakira';
    const type = 'track';
    const access_token = 'BQCd67z3Qw9LcqxsqLq8lwaMw-C0KjXgBwFKzl0q0J4D_-6j4kbl_cg7YSTc5MzNVXPkW0Ljs5xehVr532x2wfgcH3dnX4LDvxtK-oflzF_Xa4n7QRWY6TmqND6iwnBm5C4Bo-3h79iHhMi9vw0TPzPSoYw7xpQCQ3dhtUkl_1cn0vN-0Hh3H9TUT0w';

    spotifyService.searchMusic(searchStr, type, access_token).subscribe(data => {
      expect(data).toBe(10);
      expect(data).toEqual(tracks);
    });
  });
});
