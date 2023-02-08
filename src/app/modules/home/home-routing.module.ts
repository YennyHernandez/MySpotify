import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component'; //se usa alias para el path

const routes: Routes = [   //"el hijo tiene hijos" para navegar sin destruir componentes
{
  path: "Tracks",
  loadChildren:() => import('@modules/tracks/tracks.module').then(m => m.TracksModule)
},
{
  path: "Favorites",
  loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
},
{
  path: "History",
  loadChildren:() => import('@modules/history/history.module').then(m => m.HistoryModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
