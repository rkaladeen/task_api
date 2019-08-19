import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, NewTaskComponent, AllTasksComponent, UpdateTaskComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AngularFontAwesomeModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
