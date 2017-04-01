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

  isLoading = false;

  constructor(RestaurantService: RestaurantService) {
      this.RestaurantService = RestaurantService;    
  }

  ngOnInit() {
    this.get();
  }

  get(){
    this.isLoading = true;
    this.RestaurantService.get()
    .then(response => { 
      this.restaurants = response;
      this.isLoading = false;
     })
    .catch(function (error){
      console.log('Failed', error);
    });
  }

  create(){
  }

}
