import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatDialog, MatSort, MatPaginator, MatDialogConfig } from "@angular/material";
import { Employee } from "src/app/models/employee.model";
import { AddEmployeeComponent } from "../add-employee/add-employee.component";
import { DataSource } from '@angular/cdk/table';
import { DeleteConfirmComponent } from 'src/app/delete-confirm/delete-confirm.component';
import { EmployeeService } from 'src/app/services/employee.service';




@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.scss"],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [
    "Id",
    "EmpCode",
    "EmpName",
    "EmpEmail",
    "DOB",
    "EmpType",
    "Gender",
    "Active",
    "actions",
    "delete",
  ];
  
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;

  employeeDetails: Employee = <Employee>{};
  
  

  constructor(private dialog: MatDialog, private service: EmployeeService) {}

  dataSource: MatTableDataSource<Employee>;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    // this.service.GetMasterEmployees().subscribe(res => {
    //   this.dataSource.data = res as any[];
      
    // this.dataSource.sort = this.sort;
    // })
    this.dataSource = new MatTableDataSource(this.service.array);
    this.dataSource.sort = this.sort;
       
  }
  addEmployee() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = "50%";
    dialogConfig.data = {
      update: false
    }

    this.dialog.open(AddEmployeeComponent, dialogConfig);
  }
  editEmployee(data : string){

    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      empdata: data,
      update: true
    }

    this.dialog.open(AddEmployeeComponent, dialogConfig);
  }

  delete(data : Employee){
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {
      emp: data,
      
    }
    this.dialog.open(DeleteConfirmComponent, dialogConfig);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
