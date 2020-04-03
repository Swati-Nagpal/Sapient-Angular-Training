"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
class TodoComponent {
    constructor(service) {
        this.service = service;
    }
    listAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Listing all todos...');
            const todos = yield this.service.listAllTodos();
            console.log('All todos are:', todos);
        });
    }
    saveTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Saving one more todo and printing the updated list...');
            const saveMessage = yield this.service.saveTodo(todo);
            console.log(saveMessage);
        });
    }
    updateTodo(userId, id, newTitle, newStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Updating todo with user id ${userId} and todo id ${id}...`);
            const updatedTodo = yield this.service.updateTodo(userId, id, newTitle, newStatus);
            console.log('Updated todo is', updatedTodo);
        });
    }
    listCompletedTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Listing all completed todos...');
            const completedTodos = yield this.service.listCompletedTodos();
            console.log('Completed todos are', completedTodos);
        });
    }
}
let todoComp = new TodoComponent(new services_1.TodoService());
todoComp.saveTodo({ userId: 3,
    id: 45,
    title: 'Hi! I am new todo!',
    completed: true });
todoComp.updateTodo(1, 1, 'I am fine', true);
todoComp.listAllTodos();
todoComp.listCompletedTodos();
