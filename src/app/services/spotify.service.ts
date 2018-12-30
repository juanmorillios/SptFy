import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
  }
termino: string;   getNewReleases() {

    const headers = new HttpHeaders({

      'Authorization' : 'Bearer BQDyi4VOhgsQKZIc_kqswfNWvQT5lY236eLjJt_sfc9WqVqXEweuprK8-UQoHY7XymUZcYiKRY9_u6iG3oU_1mnqbxsZR3Sx_HwaOVru7cD-q0uB0J8scavDlm877j19HrL_meqv4Q'
    });

   return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
     .pipe( map( data => return data['albums'].items));

  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({

      'Authorization' : 'Bearer BQDyi4VOhgsQKZIc_kqswfNWvQT5lY236eLjJt_sfc9WqVqXEweuprK8-UQoHY7XymUZcYiKRY9_u6iG3oU_1mnqbxsZR3Sx_HwaOVru7cD-q0uB0J8scavDlm877j19HrL_meqv4Q'
    });

   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, {headers})
     .pipe( map(data => return data['artists'].items));
  }
}
