import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataraw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent {
MockTracksList: Array<TrackModel> = [
    
]

constructor(){}
ngOnInit(): void{
const {data}: any = (dataraw as any).default
this.MockTracksList = data;
}


}
