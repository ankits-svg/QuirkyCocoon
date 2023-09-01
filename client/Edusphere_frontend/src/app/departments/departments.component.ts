import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent{
  DepartmentArray : any[] = [];
 
    name: string = '';
    description: string = '';
 
  currentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllDepartment();
 
  }
 
  saveRecords()
  {
  
    let bodyData = {
      "name" : this.name,
    "description": this.description
    };
 
    this.http.post("http://127.0.0.1:8000/departments/create",bodyData).subscribe((res: any)=>
    {
        console.log("gettin the ID",res);
        alert("Department Registered Successfully");
        this.getAllDepartment();
        this.name = '';
        this.description = '';
    });
  }
 
 
  getAllDepartment()
  {
    this.http.get("http://127.0.0.1:8000/departments")
    .subscribe((res: any)=>
    {
        console.log(res);
        this.DepartmentArray = res;
    });
  }
 
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.description = data.description;
   this.currentID = data.department_id;
   
  }
 
 
 
  UpdateRecords()
  {
    let bodyData = 
    {
      "name" : this.name,
      "description": this.description
    };
    
    this.http.put(`http://127.0.0.1:8000/departments/update/${this.currentID}`, bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
        this.name = '';
        this.description = '';
        this.getAllDepartment();
    });
  }


  setDelete(data: any)
  {
    this.http.delete(`http://127.0.0.1:8000/departments/delete/${data.student_id}`).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deleted")
        this.getAllDepartment();
    });
 
  }


}