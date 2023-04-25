import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';

import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(id: number | undefined) {
    this.taskService.deleteTask(id).subscribe((tasks) => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }
}
