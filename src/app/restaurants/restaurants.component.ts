import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service'
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit {
  restaurants = [];
  RestaurantService:RestaurantService;
  restaurant = {};

  constructor(RestaurantService: RestaurantService) {
      this.RestaurantService = RestaurantService;    
  }

  ngOnInit() {
    this.get();
  }

  get(){
    this.RestaurantService.get()
    .then(response => this.restaurants = response )
    .catch(function (error){
      console.log('Failed', error);
    });
  }

  create(){
  }

}
