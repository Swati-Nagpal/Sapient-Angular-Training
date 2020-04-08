import { Pipe, PipeTransform } from '@angular/core';
import { TodoType } from '../mockdata/todo';
import { of } from 'rxjs';

@Pipe({ name: 'sortTodos' })
export class SortTodosPipe implements PipeTransform {

    transform(todos: TodoType[], [order,column]) {
        var sortedArray= todos;

        if(column=='title') { //ignore case
            if(order=='Asc')
                sortedArray = todos.sort((t1,t2) => t1.title.toLowerCase() < t2.title.toLowerCase() ? -1: 1);
            else if(order=='Desc')
                sortedArray = todos.sort((t1,t2) => t1.title.toLowerCase() < t2.title.toLowerCase() ? 1: -1);
        }
        else {
            if(order=='Asc')
                sortedArray = todos.sort((t1,t2) => t1[column] < t2[column] ? -1: 1);
            else if(order=='Desc')
                sortedArray = todos.sort((t1,t2) => t1[column] < t2[column] ? 1: -1);
        }
        return of(sortedArray);
    }
}