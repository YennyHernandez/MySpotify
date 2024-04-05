import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  flag = false;

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }
 //TODO: pasar como metodo al servicio
  sendPlay(track: TrackModel): void{
    this.flag = true;
    console.log("enviando cancion next al servicio", track, this.flag)
    this.multimediaService.trackInfo$.next(track)
    this.multimediaService.flagPlay$.next(this.flag)
    
  }


}

