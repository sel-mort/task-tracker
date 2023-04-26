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

  deleteTask(id: number | undefined): void {
    this.taskService.deleteTask(id).subscribe((tasks) => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.toggleReminder(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((newTask) => this.tasks.push(newTask));
  }
}
