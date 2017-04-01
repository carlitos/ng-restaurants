import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class SaucerService {
  
  constructor( private http: Http ) {    }
  
  private apiURL = environment.API_URL;

//  get(){
//    return this.http.get(this.apiURL)
//    .map(( response: Response) => response.json())
//    .toPromise();
//  }

  getSaucers(id: string){
    return this.http.get(this.apiURL + 'restaurants/' + id + '/saucers')
    .map((response: Response) => response.json())
    .toPromise();
  }
  
  getSaucer(saucerId: string){
    return this.http.get(this.apiURL + 'saucers/' + saucerId)
    .map((response: Response) => response.json())
    .toPromise();
  }

}