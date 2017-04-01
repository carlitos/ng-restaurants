import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class CommentService {
  
  constructor( private http: Http ) {    }
  
  private apiURL = environment.API_URL;

  getComments(id: string){
    return this.http.get(this.apiURL + 'saucers/' + id +  "/comments")
    .map((response: Response) => response.json())
    .toPromise();
  }
  
  sendComment(saucerId: string, data){
      data.date = new Date().toUTCString();
      return this.http.post(this.apiURL+ 'saucers/' + saucerId + '/comments', data)
      .map(( response: Response ) => response.json())
      .toPromise();
  }
  

}