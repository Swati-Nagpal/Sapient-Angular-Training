import { TodoService } from './services';
import { TodoType } from './mockdata/todo';

class TodoComponent {
    constructor(private service: TodoService) { }

    public async listAllTodos() {
        console.log('Listing all todos...')
        const todos = await this.service.listAllTodos();
        console.log('All todos are:', todos);
    }

    public async saveTodo(todo: TodoType) {
        console.log('Saving one more todo and printing the updated list...')
        const saveMessage = await this.service.saveTodo(todo);
        console.log(saveMessage);
    }

    public async updateTodo(userId: number, id: number, newTitle: string, newStatus: boolean) {
        console.log(`Updating todo with user id ${userId} and todo id ${id}...`)
        const updatedTodo = await this.service.updateTodo(userId, id, newTitle, newStatus);
        console.log('Updated todo is', updatedTodo);
    }

    public async listCompletedTodos() {
        console.log('Listing all completed todos...')
        const completedTodos = await this.service.listCompletedTodos();
        console.log('Completed todos are', completedTodos);
    }
}

let todoComp = new TodoComponent(new TodoService());
todoComp.saveTodo({userId: 3, 
    id: 45, 
    title:'Hi! I am new todo!', 
    completed: true}); 
todoComp.updateTodo(1,1, 'I am fine', true);
todoComp.listAllTodos();
todoComp.listCompletedTodos();