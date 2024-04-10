import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit, OnDestroy {
/*      tracks: TrackModel[] = [
    {
      _id: 1,
      name: 'Getting Over',
      album: 'One Love',
      cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
      artist: { name: 'David Guetta', nickname: 'David Guetta', nationality: 'FR' },
      //duration: { start: 0, end: 333 },
      url: 'http://localhost:3001/track.mp3'
    },
    {
      _id: 2,
      name: 'Snow Tha Product || BZRP Music Sessions #39',
      album: 'BZRP Music Sessions',
      cover: 'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg',
      artist: { name: 'Snow', nickname: 'Snow', nationality: 'US' },
      //duration: { start: 0, end: 333 },
      url: 'http://localhost:3001/track-1.mp3'
    },
   
  ];
   */
  tracks: Array<TrackModel> = [];
  observer1!: Subscription;
  constructor(public TrackService: TrackService) { }
  ngOnInit(): void {
    if (this.tracks.length === 0){
      this.observer1 = this.TrackService.tracksFilterSubject.subscribe(tracks => {
        this.tracks = tracks;
      }); 
    }
  }    
  ngOnDestroy(): void {
    this.observer1?.unsubscribe();
  }
    
}



