import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['../app.component.css']
})
export class NewTaskComponent implements OnInit {
  //Variables
  newTask: FormGroup;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.newTask = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required])
    })
  }

  onSubmit(data: Object): void {
    let newTask = { 
      "title": data['title'],
      "description": data['description'] 
    }
    let taskObservable = this._httpService.createTask(newTask);
    taskObservable.subscribe(data => {
      this.router.navigate(['/']);
    })
  }

}
