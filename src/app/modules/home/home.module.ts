import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';
import { TracksModule } from '@modules/tracks/tracks.module';
import { FavoritesModule } from '@modules/favorites/favorites.module';
import { RouterModule, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule, 
    TracksModule,RouterOutlet]
})
export class HomeModule { }
