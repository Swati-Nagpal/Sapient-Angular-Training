import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './app.user.html',
})

export class UserComponent {
  constructor() {}

  @Input()
  users;
}

let usComp = new UserComponent();
