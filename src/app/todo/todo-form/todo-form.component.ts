import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../todo.interface';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output()
  addTaskEvt: EventEmitter<Task> = new EventEmitter();

  task: Task = {
    name: '',
    desc: '',
    priority: null
  };

  handleAddTask() {
    this.addTaskEvt.emit(this.task);
  }
}
