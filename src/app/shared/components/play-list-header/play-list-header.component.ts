import { Component, OnInit } from '@angular/core';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-play-list-header',
  templateUrl: './play-list-header.component.html',
  styleUrls: ['./play-list-header.component.css']
})
export class PlayListHeaderComponent implements OnInit{ 
  constructor(public TrackService: TrackService){}
  contFavorites: number = 0;
  ngOnInit(): void {
    this.TrackService.tracksFilterSubject.subscribe(tracksmap => {
    this.contFavorites = tracksmap.length;
    })
  }

}
