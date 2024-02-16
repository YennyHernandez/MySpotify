import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';

const routes: Routes = [
  {
    path:"",  //sin el alias porque se especifica en el homeRoutingmodules y se carga en el local host
    component: FavoritesPageComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
