import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({ //declaracion de componentes, directivas, pipes ...
  declarations: [
    AppComponent,
    
  ],
  imports: [ //solo se importan modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
