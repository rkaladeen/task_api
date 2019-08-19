import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get("/tasks");
  }

  getOne(task_id: String) {
    return this._http.get(`/tasks/${task_id}`);
  }

  createTask(newTask: Object) {
    return this._http.post("/tasks", newTask);
  }

  updateTask(updateTask: Object) {
    return this._http.put(`/tasks/${updateTask['_id']}`, updateTask);
  }

  deleteTask(deleteTask: String) {
    return this._http.delete(`/tasks/${deleteTask}`);
  }

}
