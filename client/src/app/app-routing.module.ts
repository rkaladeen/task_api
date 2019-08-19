import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

const routes: Routes = [
  { path: '', component: AllTasksComponent },
  { path: 'create', component: NewTaskComponent},
  { path: 'edit/:id', component: UpdateTaskComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
