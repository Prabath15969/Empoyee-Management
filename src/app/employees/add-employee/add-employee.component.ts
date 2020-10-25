import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeType } from 'src/app/models/employee-type.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm : FormGroup ;
  isActive: boolean = false;

  constructor(private fb: FormBuilder) { 
    this.employeeForm = this.fb.group({
      EmpCode:['',[ Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      EmpName:['',{validators: [Validators.required], updateOn: "change"}],
      EmpEmail:['',[Validators.email, Validators.required]],
      EmpDOB:['',[ Validators.required]],
      EmpType:['',[ Validators.required]],
      EmpGender:['',[Validators.required]],
    })
  }

  get EmpName(){
    return this.employeeForm.get("EmpName");
  }
  get EmpEmail(){
    return this.employeeForm.get("EmpEmail");
  }
  get EmpGender(){
    return this.employeeForm.get("EmpGender");
  }
  get EmpDOb(){
    return this.employeeForm.get("EmpDOB");
  }
  get EmpType(){
    return this.employeeForm.get("EmpType");
  }

  employerTypes: EmployeeType[] = [
    { code: '', name: 'NONE'},
    { code: '123456', name: 'vghas'},
    { code: '123455', name: 'gvakhsn'},
    { code: '789456', name: 'Lbhason'},
    
  ];
  
  

  ngOnInit() {
  }
  onChange(isChecked: boolean) {
    
    if (isChecked) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  reset(){
    this.isActive = false;
  }

  addEmployee(){
    const data = {
      EmpName: this.EmpName.value,
      EmpEmail: this.EmpEmail.value,
      EmpGender: this.EmpGender.value,
      EmpDOB: this.EmpDOb.value,
      EmpType: this.EmpType.value,
      EmpActive: this.isActive
    }
    console.log(data)
  }




}
