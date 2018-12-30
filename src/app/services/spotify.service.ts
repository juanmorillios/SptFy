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
      'Authorization' : 'Bearer BQCU1saMiu36BvqEEqwPsQOtZo8yzKMYmQLdSNFnyeYMnsfHHzrFTlU6M80-VULXInd0nlPox_1AmxeeLQ-t0FsTfEsmQfdWj0U9-KeRbzBaWjYBgCXo8QNvZgG1HQXBUcm-_dzF4Q'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
        .pipe( map( data => data['albums'].items));
  }

  getArtista(termino: string) {
   return  this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
         .pipe( map(data =>  data['artists'].items));
  }
}
