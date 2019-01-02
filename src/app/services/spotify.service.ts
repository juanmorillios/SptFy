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

  // Call Api Spotify
  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDRG8f8gf7a9-PRZy4xQUdUa4rKF4UXJA4f_mPd757mOTktDG5Hw4B609VcZWLgT898htJG0kEymMdNPNFIQmoq2tGic6Gn_XBrT7HmQLTW0Lrbou35UcM_fCWJlHhfdHtmowmfBg'
    });
    return this.http.get(url, { headers });
  }

  // Get New Realses
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
        .pipe( map( data => data['albums'].items));
  }

  // Get all Artists
  getArtistas(termino: string) {
   return  this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
         .pipe( map(data =>  data['artists'].items));
  }

  // Get Artist
  getArtista(id: string) {
    return  this.getQuery(`artists/${ id }`);
          //.pipe( map(data =>  data['artists'].items));
   }

   getTopTracks(id: string) {
    return  this.getQuery(`artists/${ id }/top-tracks?country=ES`)
          .pipe( map(data =>  data['tracks']));
   }
}
