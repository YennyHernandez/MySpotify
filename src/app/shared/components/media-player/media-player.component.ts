import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programacion reactiva!

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy { 
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'
  constructor(public multimediaService: MultimediaService, public TrackService : TrackService) { }

  ngOnInit(): void {

    const observer1$ = this.multimediaService.playerStatus$.subscribe(status => this.state = status)
    this.listObservers$ = [observer1$]
  }

   ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
  }

  sendfavorites(mockCover : TrackModel): void{
    this.TrackService.addFavorite(mockCover);
    console.log("agregando propiedad favorito a ID", mockCover._id)    
  } 
  
  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x  relacion de poscición en la barra de progreso 
    const percentageFromX = (clickX * 100) / width  //se tiene el numero porcentual de click en la barra de progreso
    console.log(`Click(x): ${percentageFromX}`); 
    this.multimediaService.seekAudio(percentageFromX)

  } 


  sendNextPlay(position: number) {
    const idtrackactualget = this.multimediaService.trackInfo$.getValue();
    if (idtrackactualget && idtrackactualget._id) {
        const idtrackactual = Number(idtrackactualget._id) + position;
        const alltracks = this.TrackService.tracksSubject.getValue();
        const tracktoplay = alltracks.find(track => track._id === idtrackactual);
        if (tracktoplay) {
            this.multimediaService.trackInfo$.next(tracktoplay);
            this.multimediaService.flagPlay$.next(true)
        }
      }
    } 
 

}
