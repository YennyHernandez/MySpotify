import { TrackModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api
  public tracksSubject: BehaviorSubject<TrackModel[]> = new BehaviorSubject<TrackModel[]>([]);
  private tracksLoaded = false;
  constructor(private http: HttpClient) {
    this.loadData();
  }

  /**
   * 
   * @returns Devolver todas las canciones
   */

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  /**
   * //TODO {data:[..1,...2,..2]}  como viene
   * 
   * @returns 
   */
   private loadData(): void {
    if (!this.tracksLoaded) {
      this.http.get(`${this.URL}/tracks`).pipe(
        map((response: any) => response.data),
        tap((data: TrackModel[]) => {
          this.tracksSubject.next(data);
          this.tracksLoaded = true;
        })
      ).subscribe();
    }
  }
  /* getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({ data }: any) => {
          this.tracksSubject.next(data);
          return data
        })
      )
  } */

  addFavorite(track: TrackModel): void {
    const tracks = this.tracksSubject.getValue(); // Obtiene los tracks actuales del BehaviorSubject
    const updatedTracks = tracks.map(t => {
      if (t._id === track._id){
        if (t.statefavorite === true ){
          return { ...t, statefavorite: false }
        } else {
          return { ...t, statefavorite: true }
        }
      }
      return t; // Mantener la pista sin cambios si no es la pista deseada
    });
    this.tracksSubject.next(updatedTracks); // Actualiza el BehaviorSubject con los tracks actualizados
    console.log("los favoritos añadidos son", this.tracksSubject)
  }

  /**
   * 
   * @returns Devolver canciones random
   */
  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }
}
