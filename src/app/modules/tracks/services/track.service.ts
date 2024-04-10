import { TrackModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MultimediaService } from '@shared/services/multimedia.service';
@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api
  public tracksSubject: BehaviorSubject<TrackModel[]> = new BehaviorSubject<TrackModel[]>([]);
  public tracksFilterSubject: BehaviorSubject<TrackModel[]> = new BehaviorSubject<TrackModel[]>([]);
  private tracksLoaded = false;
  flag = false;
 public statusFavoriteActual$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)  //TODO: ver si es necesario 
  constructor(private http: HttpClient, private multimediaService : MultimediaService) {
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
        map((response: any) => (response.data as TrackModel[]).map(track =>({...track, statefavorite: false}))),
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

  addFavorite(track: TrackModel) {
    const tracks = this.tracksSubject.getValue(); // Obtiene los tracks actuales del BehaviorSubject
    const updatedTracks = tracks.map(t => {
      if (t._id === track._id){
        const updateTrack: TrackModel = {...t, statefavorite :!t.statefavorite };
        const trackPlayed = this.multimediaService.trackInfo$.getValue();
        if(trackPlayed?._id === track._id){
          this.multimediaService.trackInfo$.next(updateTrack); // Actualiza la canción en reproducción
        }
        return updateTrack
      }
      return t; // Mantener la pista sin cambios si no es la pista deseada
    });
    const trackHistoryGet = this.multimediaService.trackHistory$.getValue();
    const updatedTrackHistory = trackHistoryGet.map(t => {
      if (t._id === track._id) {
        return {...t, statefavorite: !t.statefavorite }; //actualiza el array del historial
      }
      return t;
    });
    this.multimediaService.trackHistory$.next(updatedTrackHistory);
    this.tracksSubject.next(updatedTracks); // Actualiza el BehaviorSubject con los tracks actualizados state favoritos
    console.log("los favoritos añadidos son", this.tracksSubject.value)
    this.filterFavoritos();
  }

  filterFavoritos(){
    const tracks = this.tracksSubject.getValue();
    let tracksmap = tracks.filter(track => track.statefavorite === true)
      this.tracksFilterSubject.next(tracksmap);
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
