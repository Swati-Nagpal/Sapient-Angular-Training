"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../mockdata/todo");
class TodoService {
    constructor() {
    }
    //APIs
    listAllTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 4000, todo_1.TODOS);
        });
    }
    saveTodo(todo) {
        return new Promise((resolve, reject) => {
            todo_1.TODOS.push(todo);
            setTimeout(resolve, 2000, 'Another TODO saved!');
        });
    }
    updateTodo(userId, id, newTitle, newStatus) {
        return new Promise((resolve, reject) => {
            let todo = todo_1.TODOS.find(function (todo) {
                return todo.userId == userId && todo.id == id;
            });
            todo.title = newTitle;
            todo.completed = newStatus;
            setTimeout(resolve, 6000, todo);
        });
    }
    listCompletedTodos() {
        return new Promise((resolve, reject) => {
            let completedTodos = todo_1.TODOS.filter(function (todo) {
                return todo.completed == true;
            });
            setTimeout(resolve, 3000, completedTodos);
        });
    }
}
exports.TodoService = TodoService;
