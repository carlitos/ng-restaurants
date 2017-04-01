import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class RestaurantService {
  
  constructor( private http: Http ) {    }
  
  private apiURL = environment.API_URL + 'restaurants/';

  get(){
    return this.http.get(this.apiURL)
    .map(( response: Response) => response.json())
    .toPromise();
  }

  getRestaurant(id: string){
    return this.http.get(this.apiURL + id)
    .map((response: Response) => response.json())
    .toPromise();
  }
  



  save(restaurant){

  }
  

}
