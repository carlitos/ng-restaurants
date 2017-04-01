import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from "rxjs/Rx";
import { CommentService } from './comments.service';
import { SaucerService } from '../saucers/sauser.service';


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
    private comments = [];
    private data = {};

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentService,
    private SaucerService: SaucerService
    ) { }

  ngOnInit() {
      this.subscription = this.route.params.subscribe(
        (params: any) => {
          
          this.saucerId = params.id;

          this.commentsService.getComments(this.saucerId)
          .then( response => this.comments = response );

          this.SaucerService.getSaucer(this.saucerId)
          .then(response => this.saucer = response )
        }       
      )
  }

  sendComment(e){
    this.commentsService.sendComment(this.saucerId, this.data)

    .then( response => {
      this.comments.push(response);
      this.data = {};
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
