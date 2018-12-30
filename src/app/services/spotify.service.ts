import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQCfP6GPqMiysT_zJrEbizC0WOYOz4d4-u2zQ1POmYJzMHcVEPpgfzUArmk8-gCXu5TFO69UFBJu-LaoDCX7N3UFmj1O-oSFBFD_3Fg33DG703nXGZ2-vBUTIqn8FQEWKxxxVtYa8Q'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
        .pipe( map( data => data['albums'].items));
  }

  getArtistas(termino: string) {
   return  this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
         .pipe( map(data =>  data['artists'].items));
  }

  getArtista(id: string) {
    return  this.getQuery(`artists/${ id }`);
          //.pipe( map(data =>  data['artists'].items));
   }
}
