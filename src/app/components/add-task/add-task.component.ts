import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { AddUiService } from 'src/app/services/add-ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() submitForm: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  error: string[] = [];
  errors!: { textError: string, dayError: string };

  addToggleAdd!: boolean;
  subscription!: Subscription;

  constructor(private addUiService: AddUiService) {
    this.subscription = addUiService.onToggle().subscribe((value) => {
      this.addToggleAdd = value;
    })
  }

  ngOnInit() {}

  onSubmit() {
    if (!this.text) {
      this.error.push('text must be not empty');
      this.errors.textError = "text must be not empty!";
      return;
    } else if (!this.day) {
      this.error.push('enter day');
      this.errors.dayError = "enter day !!";
      return;
    } else {
      const task: Task = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }
      this.submitForm.emit(task);
      this.clearForm();
    }
  }

  clearForm() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
