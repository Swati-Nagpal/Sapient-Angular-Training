import { Component, OnInit } from '@angular/core';

import { TodoType } from './todo';
import { TodoService } from '../services/TodoService';

@Component({
  selector: 'app-todos',
  templateUrl: './todo.component.html',
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todos: TodoType[];

  constructor(private todosService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todosService.getTodos()
      .subscribe(todos => (this.todos = todos));
  }
}
