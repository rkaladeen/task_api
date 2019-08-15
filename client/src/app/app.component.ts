import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Tasks';
  tasks: any = "";

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.tasks = data;
    })
  }

}
