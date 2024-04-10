import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([])
  listResults: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  tracksHistory: Array<TrackModel> = []
  flag = false;
  flagbtnplay = false;
  //noShowHeart = false;
  constructor(private searchService: SearchService, private multimediaService : MultimediaService) { }

  ngOnInit(): void {
    this.multimediaService.trackHistory$.subscribe(tracks =>{
      this.tracksHistory = tracks;
    })
    console.log("tracks history",this.tracksHistory)
  }

  receiveData(event: string): void {
    //TODO: agarras el termino y sabes que solo se ejecuta cunado tiene 3 caracters
    this.listResults$ = this.searchService.searchTracks$(event)
    this.listResults$.subscribe(track =>{
      this.listResults = track[0]
      this.flagbtnplay = true
      
    })
    
    console.log("el padre llamo servicio y rta", this.listResults$)

  }
  sendPlay(){
    this.flag = true;
    this.multimediaService.trackInfo$.next(this.listResults)
    this.multimediaService.flagPlay$.next(this.flag)
    console.log("🔎🔎🔎🔎🔎", this.listResults)
  }
}
