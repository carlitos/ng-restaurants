import {RouterModule, Routes } from '@angular/router';
import {RestaurantsComponent } from './restaurants/restaurants.component';
import {SaucersComponent} from './saucers/saucers.component';


const APP_ROUTER: Routes = [
    {path: '', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: SaucersComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTER);