import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  { path: '', component: AllTasksComponent },
  { path: 'create', component: NewTaskComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
