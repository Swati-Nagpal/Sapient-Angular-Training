import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { SearchService } from './services/search.service';
import { TodoType } from './mockdata/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class SearchComponent {  
  
  filteredTodos: TodoType[];  
  searchField: FormControl; 
  todoSearchForm: FormGroup; 

  constructor(private service: SearchService) { }

  ngOnInit() {
    this.todoSearchForm = new FormGroup({});
    this.searchField = new FormControl('');

    this.listAllTodos();//all todos will be listed initially and whenever search term becomes empty

    //Search Logic
    this.searchField.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe(item => {
        this.listFilteredTodos(item);
      })
  }

  public listAllTodos() {
      this.filteredTodos = this.service.listAllTodos();
  }

  public listFilteredTodos(searchTerm: string) {
      this.filteredTodos = this.service.filteredTodos(searchTerm);
  }
}
