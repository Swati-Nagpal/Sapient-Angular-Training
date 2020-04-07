import { Injectable } from '@angular/core';
import { TODOS, TodoType} from '../mockdata/todo';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor() {
    }
    
    listAllTodos(): TodoType[] {
        return TODOS;
        //return of<TodoType[]>(TODOS);
    }

    filteredTodos(searchTerm: string) {
        let allFilteredTodos = TODOS.filter(function(todo) {
            return todo.title.toLowerCase().includes(searchTerm) == true;
        });    
        return allFilteredTodos;
    }
}