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
termino: string   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDXJcuN9vmSzE2_S1U75LYKX2oF24qO0U78SC9-wx3_xZqvFOaUk9kApqNYkDCFx2wm8TBZhrp1RWQ5zt_PJkz6aOFnU2iRC2GRew0z9jNETMe51fHnoBswvgzwhOrcK55OIA75Vw'
    });

   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
     .pipe( map( data => return data["albums"].items));

  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDXJcuN9vmSzE2_S1U75LYKX2oF24qO0U78SC9-wx3_xZqvFOaUk9kApqNYkDCFx2wm8TBZhrp1RWQ5zt_PJkz6aOFnU2iRC2GRew0z9jNETMe51fHnoBswvgzwhOrcK55OIA75Vw'
    });

   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
     .pipe( map(data => return data["artists"].items));
  }
}
