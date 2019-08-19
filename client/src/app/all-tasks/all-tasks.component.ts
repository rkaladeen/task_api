import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['../app.component.css']
})
export class AllTasksComponent implements OnInit {
  tasks: any = "";
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.tasks = data;
    })
  }

  checkTask(checked: any, taskData: Object): void {
    let temp = taskData; 
    console.log(checked);
    if (checked) { temp['completed'] = true; }
    else if (!checked) { temp['completed'] = false; };
    let taskObservable = this._httpService.updateTask(temp);
    taskObservable.subscribe(data => {
      console.log(data);
    })
  }

  deleteTask(task_id: String): void {
    let taskObservable = this._httpService.deleteTask(task_id);
    taskObservable.subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

}
