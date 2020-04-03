import { Injectable } from '@angular/core';
import { CommentType, COMMENTS } from '../mockdata/comment';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class CommentsService {
    constructor() { }
   
    public listComments(): Promise<CommentType[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, COMMENTS);
        });
    }
}