import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantService {
  
  restaurants =[
        {
          id: '1',
          name: 'La Matera ',
          address: 'Av. Vallarta'
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
      ];

  constructor() {   }
  get(){
    return this.restaurants.slice();
  }

  save(restaurant){
    var copy = Object.assign({}, restaurant);
    this.restaurants.push(copy);
  }
  

}
