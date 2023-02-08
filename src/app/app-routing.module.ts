import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:"Auth",
    loadChildren:()=> import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    //path: " " se refiere al local host:4200, normalmente se define un componente pero para usar lazzyloading se usa loadchildren usando como promesa el modulo que esta enlazado con el routing module
    path:"",
    component: HomePageComponent, //navegar sin destruir componentes
    loadChildren:()=> import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
