import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  ToDoDetails = [
    { "task": "SE Assignment", "id": "1.", "date":"12/11","time": "5pm" },
    { "task": "SL Lab Work", "id": "2.", "date": "13/11","time": "11:59pm" },
    { "task": "Cleaning my Bike", "id": "3.", "date": "15/11","time": "10am" },
    { "task": "Gift for Abhi's Birthday", "id": "4.", "date": "20/11", "time": "6pm" },
    { "task": "Python Code Challenge", "id": "5.", "date": "27/11", "time": "11:59pm" }
  ]

  getToDo() {
    return this.ToDoDetails
}

  constructor() { }
}
