import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';

import { TodoType} from '../Todo/todo';

@Injectable()
export class TodoService {
    todosUrl = 'http://localhost:3000/todos'; 
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('TodoService');
    }
    
    getTodos(): Observable<TodoType[]> {
        return this.http.get<TodoType[]>(this.todosUrl)
        .pipe(
            catchError(this.handleError('getTodos', []))
        );
    }
}