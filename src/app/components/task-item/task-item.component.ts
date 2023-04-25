import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task
 } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

 @Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDelete: EventEmitter<number | undefined> = new EventEmitter();
  @Output() onToggle: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  handleDelete(id?: number) {
    this.onDelete.emit(id);
  }

  handleDblClick(task: Task) {
    this.onToggle.emit(task);
  }
}
