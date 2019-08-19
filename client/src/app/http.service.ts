import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get("/tasks");
  }

  createTask(newTask: Object){
    return this._http.post("/tasks", newTask);
  }

  updateTask(updateTask: Object){
    return this._http.put(`/tasks/${updateTask['_id']}`, updateTask);
  }

}
