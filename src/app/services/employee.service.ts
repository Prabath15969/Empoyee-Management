import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   array=[
    {
      Id: 1,
      EmpName: "sa",
      EmpCode: "AB0001",
      EmpEmail: "aef@vgj",
      EmpDOB: new Date("2019-05-27"),
      EmpGender: "M",
      EmpType: "123456",
      EmpActive: true,
    },
    {
      Id: 2,
      EmpName: "sa",
      EmpCode: "AB0002",
      EmpEmail: "aef@bnm",
      EmpDOB: new Date("2020-05-27"),
      EmpGender: "M",
      EmpType: "VDE",
      EmpActive: true,
    },
    {
      Id: 3,
      EmpName: "sa",
      EmpCode: "AB0003",
      EmpEmail: "aef@b",
      EmpDOB: new Date("2019-06-27"),
      EmpGender: "M",
      EmpType: "VDE",
      EmpActive: true,
    },
    {
      Id: 1,
      EmpName: "sa",
      EmpCode: "XY0001",
      EmpEmail: "aef@bvnm",
      EmpDOB: new Date("2019-05-28"),
      EmpGender: "M",
      EmpType: "VDE",
      EmpActive: true,
    },
    {
      Id: 1,
      EmpName: "sa",
      EmpCode: "XY0002",
      EmpEmail: "aef@v",
      EmpDOB: new Date("2019-05-27"),
      EmpGender: "M",
      EmpType: "VDE",
      EmpActive: true,
    },
    {
      Id: 6,
      EmpName: "sa",
      EmpCode: "XY1245",
      EmpEmail: "aef@mv",
      EmpDOB: new Date("2019-07-27"),
      EmpGender: "M",
      EmpType: "VDE",
      EmpActive: true,
    },
  ];

  constructor(private http: HttpClient) { }

  deleteMasterEmployee(employee : Employee){
    console.log(employee);
    return this.http.delete('http//localhost'+employee.EmpCode);
  }

  InsertMasterEmployee(employee : Employee){
    return this.http.post('http://localhost:',employee);
  }

  GetMasterEmployees(){
    return this.array;
    // return this.http.get('http://localhost:');
  }
  EditMasterEmployee(employee:Employee){
    return this.http.post('http://localhost:',employee);
  }

}
