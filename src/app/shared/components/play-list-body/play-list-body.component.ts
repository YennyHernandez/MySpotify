import { Component, OnInit, Input  } from '@angular/core';
import { TrackService } from '@modules/tracks/services/track.service';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import * as dataRaw from '../../../data/tracks.json'
import { TracksModule } from '@modules/tracks/tracks.module';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Array<TrackModel> = []
  contFavorites: number = 0;
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor(public TrackService: TrackService) { }

  ngOnInit(): void {
    this.TrackService.tracksFilterSubject.subscribe(tracks => {
      this.tracks = tracks;
    }); 
  }
  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort)
    console.log("tracks eso 🌱",this.tracks)
  }

}
