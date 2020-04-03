import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-todoList',
    templateUrl: './app.todoList.html',
})
export class TodoListComponent {
    constructor() { }

    todos: string[] = [];
    readTodo(evt) {
        //add new todo at top of the list
        this.todos.unshift(evt);
    }

    removeTodo(evt) {
        let index = this.todos.indexOf(evt);
        this.todos.splice(index,1);
    }   
}