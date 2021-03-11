import { ArtistComponent } from "./artist.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentsModule } from "../components.module";

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;
  let el: DebugElement;
  let spotifyService: SpotifyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ComponentsModule],
      providers: [SpotifyService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ArtistComponent);
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
    const artists = {
      "artists": {
        "href": "https://api.spotify.com/v1/search?query=shakira&type=artist&market=ES&offset=0&limit=10",
        "items": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp"
            },
            "followers": {
              "href": null,
              "total": 21114132
            },
            "genres": [
              "colombian pop",
              "dance pop",
              "latin",
              "latin pop",
              "pop"
            ],
            "href": "https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp",
            "id": "0EmeFodog0BfCgMzAIvKQp",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/93e6b100a00437a05f57aa66ce41208811296fc8",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/082dea5ea88ac1c9a535c0b25839872ca56388d2",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/0915f83efa2dbf6fdf34c352c26d4bc477f1bdca",
                "width": 160
              }
            ],
            "name": "Shakira",
            "popularity": 88,
            "type": "artist",
            "uri": "spotify:artist:0EmeFodog0BfCgMzAIvKQp"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3RaPHdbOVsUjPFljce9rEz"
            },
            "followers": {
              "href": null,
              "total": 4775
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3RaPHdbOVsUjPFljce9rEz",
            "id": "3RaPHdbOVsUjPFljce9rEz",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/f0e58c30edb45dcac0b0670d4dae7bde9b0631e2",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/5433ac7c6dcbf04375536f8d4e08be6b4e800d28",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/522bd35ad6200f838193e06977de0d2b10d3ece8",
                "width": 160
              }
            ],
            "name": "Shakira Martínez",
            "popularity": 46,
            "type": "artist",
            "uri": "spotify:artist:3RaPHdbOVsUjPFljce9rEz"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/18nKUAfNnowoqfqDhwI3X3"
            },
            "followers": {
              "href": null,
              "total": 449
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/18nKUAfNnowoqfqDhwI3X3",
            "id": "18nKUAfNnowoqfqDhwI3X3",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/f821378c07946be2384bb86b3ab51f19a0a698b0",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/8a461df98d33a2b0fa0455dffb344c6a633fddb4",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/a026f5458b2ff6a3c16e84ffa063820ca3baaa69",
                "width": 160
              }
            ],
            "name": "Shakira Jasmine",
            "popularity": 44,
            "type": "artist",
            "uri": "spotify:artist:18nKUAfNnowoqfqDhwI3X3"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3j8bRF9mMAkSjzMWgmzj7A"
            },
            "followers": {
              "href": null,
              "total": 6
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3j8bRF9mMAkSjzMWgmzj7A",
            "id": "3j8bRF9mMAkSjzMWgmzj7A",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27347ff9d091b7a5d16cdfa40b1",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0247ff9d091b7a5d16cdfa40b1",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485147ff9d091b7a5d16cdfa40b1",
                "width": 64
              }
            ],
            "name": "Shakira Burks",
            "popularity": 1,
            "type": "artist",
            "uri": "spotify:artist:3j8bRF9mMAkSjzMWgmzj7A"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6G7YwwaalkrzAfVthgOK5u"
            },
            "followers": {
              "href": null,
              "total": 9
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/6G7YwwaalkrzAfVthgOK5u",
            "id": "6G7YwwaalkrzAfVthgOK5u",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273c4de1456b0d3485e9ca13e18",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02c4de1456b0d3485e9ca13e18",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851c4de1456b0d3485e9ca13e18",
                "width": 64
              }
            ],
            "name": "Shakira shakiraa Ug",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:6G7YwwaalkrzAfVthgOK5u"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5EsEcW1pMi2bAo7WZO9olP"
            },
            "followers": {
              "href": null,
              "total": 76
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/5EsEcW1pMi2bAo7WZO9olP",
            "id": "5EsEcW1pMi2bAo7WZO9olP",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/75c82e2cebffeed3e195efd6214daa69be587778",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/51002aeb9ad6e9e5727c60e415c71db61f7ff3c6",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/0e726c956aec464ab0d9e54dd0d97eb5852f86e6",
                "width": 160
              }
            ],
            "name": "Shakira Aly",
            "popularity": 6,
            "type": "artist",
            "uri": "spotify:artist:5EsEcW1pMi2bAo7WZO9olP"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0uQglV735xc0lCVzYze1bu"
            },
            "followers": {
              "href": null,
              "total": 184
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/0uQglV735xc0lCVzYze1bu",
            "id": "0uQglV735xc0lCVzYze1bu",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2731514e84d70282c3554c7554f",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e021514e84d70282c3554c7554f",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048511514e84d70282c3554c7554f",
                "width": 64
              }
            ],
            "name": "Shakira2X",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:0uQglV735xc0lCVzYze1bu"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4nw63RlmZDuOgXlj2k9ypu"
            },
            "followers": {
              "href": null,
              "total": 469
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/4nw63RlmZDuOgXlj2k9ypu",
            "id": "4nw63RlmZDuOgXlj2k9ypu",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/5bd4925384dc663b047d15f2772ffdb7994aa961",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/e9061eb3d837aba3f44f271361bd5a49389e71f0",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/f2490e58efb7b4f50991ddca3a07fc648320d2eb",
                "width": 160
              }
            ],
            "name": "Shakirah",
            "popularity": 10,
            "type": "artist",
            "uri": "spotify:artist:4nw63RlmZDuOgXlj2k9ypu"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3MDUALQzbaebfO8budGWye"
            },
            "followers": {
              "href": null,
              "total": 517
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3MDUALQzbaebfO8budGWye",
            "id": "3MDUALQzbaebfO8budGWye",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27351682dea2f88b65fd4dc80e5",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0251682dea2f88b65fd4dc80e5",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485151682dea2f88b65fd4dc80e5",
                "width": 64
              }
            ],
            "name": "Shakira",
            "popularity": 0,
            "type": "artist",
            "uri": "spotify:artist:3MDUALQzbaebfO8budGWye"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4rrTCnVDHpLWe1d4qfseNK"
            },
            "followers": {
              "href": null,
              "total": 3
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/4rrTCnVDHpLWe1d4qfseNK",
            "id": "4rrTCnVDHpLWe1d4qfseNK",
            "images": [],
            "name": "Shakira Nyoko",
            "popularity": 6,
            "type": "artist",
            "uri": "spotify:artist:4rrTCnVDHpLWe1d4qfseNK"
          }
        ],
        "limit": 10,
        "next": "https://api.spotify.com/v1/search?query=shakira&type=artist&market=ES&offset=10&limit=10",
        "offset": 0,
        "previous": null,
        "total": 73
      }
    };
    const searchStr = 'shakira';
    const type = 'artist';
    const access_token = 'BQDymZpA5CY9Xblg0rGuuZxe1AZWoTLLKD0rAaxBUa67W1T4rq2KRPJ4vNs3Aep-zElNrQYWbToEdcznJ7Yjmlo41HNwjmu0pgAfa5tavFRmSgVYTn_GgBMZa2_v11RiEhmieXUqX5jqO-nhcPWzYTe7ZaQ7q1794BX8XUGglsqCp5if_3EnQpW61gw';

    spotifyService.searchMusic(searchStr, type, access_token).subscribe(data => {
      expect(data).toBe(10);
      expect(data).toEqual(artists);
    });
  });
});