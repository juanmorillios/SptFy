import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
  }
  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQC1NDvVR1yd80vHh34b2fbhQ42ptL5IRvdjz0z6sdRgYTwH7Su2ycSJSKO9dg_LcfLQdWBqCIx13Vy77Uk'
    });
   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }
}
