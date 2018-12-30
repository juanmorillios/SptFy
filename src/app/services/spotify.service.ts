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
      'Authorization' : 'Bearer BQBcg5Xf7MOy4rXhyYjcTslqw2iXdKv4gX76V82_D9vPRanTDjCWEJETBK-L1N2EGrrgnF5vIObvxOi0psnQjfLPorSeGYdSZMRaP3rzTBrzJw-7zZtIi8G4VCO5UVFJ_7gE7pZT-g'
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
