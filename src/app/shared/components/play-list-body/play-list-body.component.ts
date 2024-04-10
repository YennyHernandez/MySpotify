import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { TrackService } from '@modules/tracks/services/track.service';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import * as dataRaw from '../../../data/tracks.json'
import { TracksModule } from '@modules/tracks/tracks.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit{
  @Input() tracks: Array<TrackModel> = [];
  @Input() showHeart: boolean = true;
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  //observer1!: Subscription;
  constructor(public TrackService: TrackService) { }
  ngOnInit(): void {
     /*  if (this.tracks.length === 0){
        this.observer1 = this.TrackService.tracksFilterSubject.subscribe(tracks => {
          this.tracks = tracks;
        }); 
      } */    
  }
 
  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
  sendfavorites(mockCover : TrackModel): void{
    this.TrackService.addFavorite(mockCover);
    //this.isLiked = !this.isLiked
    console.log("quitando favorito a ID", mockCover._id)    
  } 

}
