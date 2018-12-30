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
      'Authorization' : 'Bearer BQD1jSPAbFcMdm6YPO1JOYA2pwHjGZGmpqphklvUrKNl18ge2dXP_WWSF_POc7JwK3PkTiGhLVesEQF6sn1edPlU1__hmWVT1XnwDO-aPB-02h-IrEw88T2xfWz5AGm9iO6vHdvvaA'
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
