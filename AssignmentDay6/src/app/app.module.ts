import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './app.component';
import { SortTodosPipe } from './Pipes/sortTodos.pipe';

@NgModule({
  declarations: [
    TodoComponent,
    SortTodosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule { }
