import { TodoService } from './services';
import { TodoType } from './mockdata/todo';

class TodoComponent {
    constructor(private service: TodoService) { }

    public async listAllTodos() {
        console.log('Listing all todos...')
        const todos = await this.service.listAllTodos();
        console.log('All todos are:', todos);
    }

    // public async listCompletedTodos() {
    //     console.log('Listing all completed todos...')
    //     const completedTodos = await this.service.listCompletedTodos();
    //     console.log('Completed todos are', completedTodos);
    // }
}