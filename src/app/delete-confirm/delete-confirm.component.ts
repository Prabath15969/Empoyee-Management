import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { EmployeeService } from "../services/employee.service";
import { Employee } from '../models/employee.model';

@Component({
  selector: "app-delete-confirm",
  templateUrl: "./delete-confirm.component.html",
  styleUrls: ["./delete-confirm.component.scss"],
})
export class DeleteConfirmComponent implements OnInit {

  employee : Employee;

  constructor(
    private matDialogRef: MatDialogRef<DeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private empService: EmployeeService
  ) {
    this.employee = data.emp;
  }

  ngOnInit() {}

  delete() {
    this.empService.deleteMasterEmployee(this.employee).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.close();
  }
  close() {
    this.matDialogRef.close();
  }
}
