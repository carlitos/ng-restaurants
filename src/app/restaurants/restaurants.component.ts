import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants = [];

  constructor() {
      this.restaurants =[
        {
          id: '1',
          name: 'MacDonalds',
          address: 'Direccion 1'
        },
        {
          id: '2',
          name: 'Carls Jr',
          address: 'Direccion 2'
        },
        {
          id: '3',
          name: 'In & Out ',
          address: 'Direccion 3'
        },
        {
          id: '3',
          name: 'Wendys ',
          address: 'Direccion 4'
        },
        {
          id: '4',
          name: 'Las huerfanas ',
          address: 'Direccion 5'
        }
      ]
   }

  ngOnInit() {
  }

}
