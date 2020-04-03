import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './app.todoForm.component';
import { TodoListComponent } from './app.todoList.component';
import { CommentsComponent } from './Comp-ServiceInteraction/app.comments.component';


@NgModule({
  declarations: [
    AppComponent, TodoFormComponent, TodoListComponent, CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
