import { Component, OnInit } from '@angular/core';
import { CommentsService } from './services/comments.service';
import { CommentType } from './mockdata/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './app.comments.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css',
              './comment.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {
  comments: CommentType[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.commentsService.listComments().then(comments => {
      this.comments = comments;
    });
  }

}
