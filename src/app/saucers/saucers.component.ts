import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RestaurantService } from './../restaurants/restaurant.service';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-saucers',
  templateUrl: './saucers.component.html',
  styleUrls: ['./saucers.component.css'],
  providers: [RestaurantService]
})

export class SaucersComponent implements OnInit {
  private restaurantId: string;
  private subscription: Subscription;
  private restaurant = {};

  constructor(private route: ActivatedRoute,
              private RestaurantService: RestaurantService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.restaurantId = params['id'];
        this.RestaurantService.getRestaurant(this.restaurantId)
            .then( response => this.restaurant = response );
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
