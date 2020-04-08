import { TODOS, TodoType} from '../mockdata/todo';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    constructor() {
    }
    
    listAllTodos(): TodoType[]{
        return TODOS;
    }
}