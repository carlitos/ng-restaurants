import {RouterModule, Routes } from '@angular/router';
import {RestaurantsComponent } from './restaurants/restaurants.component';

const APP_ROUTER: Routes = [
    {path: '', component: RestaurantsComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTER);