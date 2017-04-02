import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { CommentService } from './comments.service';
import { SaucerService } from '../saucers/sauser.service';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentService, SaucerService]
})
export class CommentsComponent implements OnInit, OnDestroy {
    private saucerId: string;
    private subscription: Subscription;

    private saucer = {};
    comments: LocalDataSource;
    private data = {};

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentService,
    private SaucerService: SaucerService
    ) { 
      this.comments = new LocalDataSource();
      
    }

    settings = {
    columns: {
      id: {
        title: 'ID'
      },
      createdBy: {
        title: 'Creado por'
      },
      comment: {
        title: 'Comentario'
      }
    }
  };

  ngOnInit() {
      this.subscription = this.route.params.subscribe(
        (params: any) => {
          
          this.saucerId = params.id;

          this.commentsService.getComments(this.saucerId)
          .then( response => this.comments.load(response) );

          this.SaucerService.getSaucer(this.saucerId)
          .then(response => this.saucer = response )
        }       
      )
  }

  sendComment(e){
    this.commentsService.sendComment(this.saucerId, this.data)

    .then( response => {
       this.commentsService.getComments(this.saucerId)
          .then( response => this.comments.load(response) );
          
      this.data = {};
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
