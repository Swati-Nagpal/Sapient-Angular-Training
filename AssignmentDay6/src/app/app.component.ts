import { TodoService } from './services/todo.service';
import { TodoType } from './mockdata/todo';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TodoComponent {
  todos: TodoType[];
  todosList: any;
  sortOption: string;
  sortByColumn: string;
  constructor(private service: TodoService) { }

  ngOnInit() {
    this.listAllTodos();
  }
  public listAllTodos() {
    this.todos = this.service.listAllTodos();
    this.todosList = of(this.todos);
  }

  setSortOption(target: string, sortOption: string) {
    this.sortByColumn = target;
    this.sortOption = sortOption;
  }
}