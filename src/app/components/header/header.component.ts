import { Component, OnInit } from '@angular/core';
import { AddUiService } from 'src/app/services/add-ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private addUiService: AddUiService) {
    this.subscription = addUiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.addUiService.toggleAddTask();
  }
}
