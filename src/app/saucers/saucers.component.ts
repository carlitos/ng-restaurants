import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RestaurantService } from './../restaurants/restaurant.service';
import { Subscription } from "rxjs/Rx";
import { SaucerService } from './sauser.service';

@Component({
  selector: 'app-saucers',
  templateUrl: './saucers.component.html',
  styleUrls: ['./saucers.component.css'],
  providers: [RestaurantService, SaucerService]
})

export class SaucersComponent implements OnInit {
  private restaurantId: string;
  private subscription: Subscription;
  private restaurant = {};
  private saucers = [];

  constructor(private route: ActivatedRoute,
              private RestaurantService: RestaurantService,
              private SaucerService: SaucerService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.restaurantId = params['id'];
        this.RestaurantService.getRestaurant(this.restaurantId)
            .then( response => this.restaurant = response );

        this.SaucerService.getSaucers(this.restaurantId)
            .then( response => this.saucers = response ); 
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
