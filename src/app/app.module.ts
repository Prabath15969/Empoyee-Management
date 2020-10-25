import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EmployeeTypeListComponent } from './employees/employee-type-list/employee-type-list.component';
import { EmployeeTypeAddComponent } from './employees/employee-type-add/employee-type-add.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeTypeListComponent,
    EmployeeTypeAddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule, 
    MaterialModule
  ],
  entryComponents: [
    AddEmployeeComponent,
    EmployeeTypeAddComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
