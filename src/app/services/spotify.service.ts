import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
  }
termino: string   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQD2RtX5HKmi-Bb6Lz5mOUS-uwn_fWXn7iGbDF38uk9rpK3FprGsaA-u0tvWOv36_BiRQfck059enEoOXsCqWzADSkt6mjvMdkSWvsy1nS2hg9zoKXbueUB4iHv4JPa_NqGtxDSVbA'
    });
   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQD2RtX5HKmi-Bb6Lz5mOUS-uwn_fWXn7iGbDF38uk9rpK3FprGsaA-u0tvWOv36_BiRQfck059enEoOXsCqWzADSkt6mjvMdkSWvsy1nS2hg9zoKXbueUB4iHv4JPa_NqGtxDSVbA'
    });

   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers});
  }
}
