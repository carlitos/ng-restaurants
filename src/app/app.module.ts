import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from './app.routing';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SaucersComponent } from './saucers/saucers.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    SaucersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
