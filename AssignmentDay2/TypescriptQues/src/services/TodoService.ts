import { TODOS, TodoType} from '../mockdata/todo';

export class TodoService {
    constructor() {
    }
    
    //APIs
    listAllTodos(): Promise<TodoType[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 4000, TODOS);
        });
    }

    saveTodo(todo: TodoType) {
        return new Promise((resolve, reject) => {
            TODOS.push(todo);
            setTimeout(resolve, 2000, 'Another TODO saved!');
        });
    }

    updateTodo(userId: number, id: number, newTitle: string, newStatus: boolean) {
        return new Promise((resolve, reject) => {
            let todo = TODOS.find(function(todo) {
                return todo.userId==userId && todo.id==id 
            });
            todo.title=newTitle;
            todo.completed=newStatus;
            setTimeout(resolve, 6000, todo);
        });
    }

    listCompletedTodos() {
        return new Promise((resolve, reject) => {
            let completedTodos = TODOS.filter(function(todo) {
                return todo.completed==true;
            });
            setTimeout(resolve, 3000, completedTodos);
        });
    }

}