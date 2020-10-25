import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { EmployeeTypeAddComponent } from '../employee-type-add/employee-type-add.component';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-type-list',
  templateUrl: './employee-type-list.component.html',
  styleUrls: ['./employee-type-list.component.scss']
})
export class EmployeeTypeListComponent implements OnInit {

  
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
  
  

  constructor(private dialog: MatDialog) {}

  dataSource: MatTableDataSource<any>;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    let array= [
      {
        Id: 1,
        EmpName: "sa",
        EmpCode: "AB0001",
        EmpEmail: "aef",
        EmpDOB: new Date("2019-05-27"),
        EmpGender: "M",
        EmpType: "VDE",
        EmpActive: true,
      },
      {
        Id: 2,
        EmpName: "sa",
        EmpCode: "AB0002",
        EmpEmail: "aef",
        EmpDOB: new Date("2020-05-27"),
        EmpGender: "M",
        EmpType: "VDE",
        EmpActive: true,
      },
      {
        Id: 3,
        EmpName: "sa",
        EmpCode: "AB0003",
        EmpEmail: "aef",
        EmpDOB: new Date("2019-06-27"),
        EmpGender: "M",
        EmpType: "VDE",
        EmpActive: true,
      },
      {
        Id: 1,
        EmpName: "sa",
        EmpCode: "XY0001",
        EmpEmail: "aef",
        EmpDOB: new Date("2019-05-28"),
        EmpGender: "M",
        EmpType: "VDE",
        EmpActive: true,
      },
      {
        Id: 1,
        EmpName: "sa",
        EmpCode: "XY0002",
        EmpEmail: "aef",
        EmpDOB: new Date("2019-05-27"),
        EmpGender: "M",
        EmpType: "VDE",
        EmpActive: true,
      },
      {
        Id: 6,
        EmpName: "sa",
        EmpCode: "XY1245",
        EmpEmail: "aef",
        EmpDOB: new Date("2019-07-27"),
        EmpGender: "M",
        EmpType: "VDE",
        EmpActive: true,
      },
    ];
    this.dataSource = new MatTableDataSource(array);
    this.dataSource.sort = this.sort;
  }
  addEmployee() {
    this.dialog.open(EmployeeTypeAddComponent, {
      width: "50%",
      height: "80%",
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
