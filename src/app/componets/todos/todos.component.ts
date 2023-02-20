import { Component } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[] = [
    {
      content: 'First todo',
      completed: false,
    },
    {
      content: 'Second todo',
      completed: true,
    },
    {
      content: 'First todo',
      completed: false,
    },
    {
      content: 'Second todo',
      completed: true,
    },
  ];
  inputTodo:string = "";

  toggleDone(id: number) {
    this.todos.map((v, i)=>{
      if (i == id) v.completed = ! v.completed;
      return v;
    });
  }

deleteTodo(id: number) {
  this.todos =this.todos.filter ((v ,i )=> i !==id);
}

addtodo () {
  this.todos.push({
    content:this.inputTodo,
    completed:false
  });
this.inputTodo="";
console.log(this.todos)

}

  constructor() {}

  ngOnit(): void {
    // this.todos =[
    // ]
  }
}
