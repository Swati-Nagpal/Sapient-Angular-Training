import { Component } from '@angular/core';
import { User } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   USERS: User [] = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
        },
        "company": {
          "name": "Romaguera-Crona",
          "tagLine": "Multi-layered client-server neural-net",
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
        },
        "company": {
          "name": "Deckow-Crist",
          "tagLine": "Proactive didactic contingency",
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
        },
        "company": {
          "name": "Romaguera-Jacobson",
          "tagLine": "Face to face bifurcated interface",
        }
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "city": "South Elvis",
          "zipcode": "53919-4257",
        },
        "company": {
          "name": "Robel-Corkery",
          "tagLine": "Multi-tiered zero tolerance productivity",
        }
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "city": "Roscoeview",
          "zipcode": "33263",
        },
        "company": {
          "name": "Keebler LLC",
          "tagLine": "User-centric fault-tolerant solution",
        }
      },
   ]; 
}
