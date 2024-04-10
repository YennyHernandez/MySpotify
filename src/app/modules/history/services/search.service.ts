import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  searchTracks$(term: string): Observable<any> {  
    const capitalizedTerm = term.charAt(0).toUpperCase() + term.slice(1).toLowerCase();
    return this.http.get(`${this.URL}/tracks?src=${capitalizedTerm}`)
      .pipe(
        map((dataRaw: any) => dataRaw.data),
        map((tracks: TrackModel[]) => tracks.filter((track: TrackModel) => track.name && track.name.includes(capitalizedTerm))),        
        )    
  }
}
