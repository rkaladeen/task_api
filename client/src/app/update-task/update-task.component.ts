import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['../app.component.css']
})
export class UpdateTaskComponent implements OnInit {
  currentTask: Object;

  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    let taskObservable = this._httpService.getOne(id)
    taskObservable.subscribe(data => {
      console.log(data);
      this.currentTask = data;
    })
    // this.newTask = new FormGroup({
    //   'title': new FormControl(null, [Validators.required]),
    //   'description': new FormControl(null, [Validators.required])
    // })
  }

  onSubmit(): void {
    let taskObservable = this._httpService.updateTask(this.currentTask);
    taskObservable.subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    })
  }

}
