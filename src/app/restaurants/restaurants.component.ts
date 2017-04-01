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
  restaurant = {};
  RestaurantService:RestaurantService;

  constructor(RestaurantService: RestaurantService) {
      this.RestaurantService = RestaurantService;    
  }

  ngOnInit() {
    this.restaurants = this.RestaurantService.get();
  }

  create(){
    this.RestaurantService.save( this.restaurant); 
    this.restaurants = this.RestaurantService.get();

    this.restaurant = {};
  }

}
