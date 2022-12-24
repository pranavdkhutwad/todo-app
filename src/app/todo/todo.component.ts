import { Component } from '@angular/core';
import { Task } from './todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  highPriorityList: Task[] = [];
  mediumPriorityList: Task[] = [];
  lowPriorityList: Task[] = [];

  handleAdd(task: Task) {
    switch(task.priority) {
      case 1: {
        this.highPriorityList.push({ ...task });
        break;
      }
      case 2: {
        this.mediumPriorityList.push({ ...task });
        break;
      }
      case 3: {
        this.lowPriorityList.push({ ...task });
        break;
      }
      default: {
        console.log('Wrong priority');
      }
    }
  }
}
