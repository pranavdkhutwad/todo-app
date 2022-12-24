import { Component, Input } from '@angular/core';
import { Task } from '../../todo.interface';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todoItem!: Task;

  getClassByPriority(priority: number | undefined | null) {
    switch(priority) {
      case 1: {
        return 'border-danger';
      }
      case 2: {
        return 'border-warning';
      }
      case 3: {
        return 'border-info';
      }
      default: {
        return null;
      }
    }
  }
}
