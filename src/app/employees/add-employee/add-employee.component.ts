import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeType } from 'src/app/models/employee-type.model';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm : FormGroup ;
  isActive: boolean = false;
  update: boolean = false;
  empdata: Employee = <Employee>{}

  constructor(private fb: FormBuilder, private matDialogRef:MatDialogRef<AddEmployeeComponent>, @Inject(MAT_DIALOG_DATA) data, private service: EmployeeService) { 
    
    this.update = data.update;
    this.empdata = data.empdata;
    console.log(this.empdata)

    this.employeeForm = this.fb.group({
      EmpCode:[{value:'',disabled:this.update},[ Validators.required, Validators.minLength(6), Validators.maxLength(6),]],
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
  get EmpCode(){
    return this.employeeForm.get("EmpCode");
  }

  employerTypes: EmployeeType[] = [
    { code: '', name: 'NONE'},
    { code: '123456', name: 'vghas'},
    { code: '123455', name: 'gvakhsn'},
    { code: '789456', name: 'Lbhason'},
    
  ];
  
  

  ngOnInit() {
    if (this.update == true) {
      this.employeeForm.patchValue({
        EmpCode: this.empdata.EmpCode,
        EmpName: this.empdata.EmpName,
        EmpEmail: this.empdata.EmpEmail,
        EmpDOB: this.empdata.EmpDOB,
        EmpType: this.empdata.EmpType,
        EmpGender:this.empdata.EmpGender
      });
    }

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

  addEmployee(isupdate : boolean){
    const data = {
      Id:0,
      EmpCode: this.EmpCode.value,
      EmpName: this.EmpName.value,
      EmpEmail: this.EmpEmail.value,
      EmpGender: this.EmpGender.value,
      EmpDOB: this.EmpDOb.value,
      EmpType: this.EmpType.value,
      EmpActive: this.isActive
    }
    console.log(data)
    if(isupdate){
      console.log("update");
      // this.service.EditMasterEmployee(data).subscribe(res => {
      //   console.log(res);
      //  })
    }else{
      console.log("Add")
      // this.service.InsertMasterEmployee(data).subscribe(res => {
      //  console.log(res);
      // })
    }
    
  }
}
