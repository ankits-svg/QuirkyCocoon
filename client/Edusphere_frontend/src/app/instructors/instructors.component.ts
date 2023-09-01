import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent{
  InstructorArray : any[] = [];
 
    name: string = '';
    gender: string = '';
    date_of_birth: string = '';
    department:string='';
    email: string = '';
    contact_number: string = '';
 
  currentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllInstructor();
 
  }
 
  saveRecords()
  {
  
    let bodyData = {
      "name" : this.name,
    "gender": this.gender,
    "date_of_birth": this.date_of_birth,
    "department":this.department,
    "email": this.email,
    "contact_number": this.date_of_birth
    };
 
    this.http.post("http://127.0.0.1:8000/instructors/create",bodyData).subscribe((res: any)=>
    {
        console.log("gettin the ID",res);
        alert("Instructor Registered Successfully");
        this.getAllInstructor();
        this.name = '';
        this.gender = '';
        this.date_of_birth = '';
        this.department='';
        this.email='';
        this.contact_number='';
    });
  }
 
 
  getAllInstructor()
  {
    this.http.get("http://127.0.0.1:8000/instructors")
    .subscribe((res: any)=>
    {
        console.log(res);
        this.InstructorArray = res;
    });
  }
 
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.gender = data.gender;
   this.date_of_birth = data.date_of_birth;
   this.department=data.department;
   this.email=data.email;
   this.contact_number=data.contact_number;
   this.currentID = data.instructor_id;
   
  }
 
 
 
  UpdateRecords()
  {
    let bodyData = 
    {
      "name" : this.name,
    "gender": this.gender,
    "date_of_birth": this.date_of_birth,
    "department":this.department,
    "email": this.email,
    "contact_number": this.contact_number
    };
    
    this.http.put(`http://127.0.0.1:8000/instructors/update/${this.currentID}`, bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
        this.name = '';
        this.gender = '';
        this.date_of_birth = '';
        this.department='';
        this.email='';
        this.contact_number='';
        this.getAllInstructor();
    });
  }


  setDelete(data: any)
  {
    this.http.delete(`http://127.0.0.1:8000/instructors/delete/${data.instructor_id}`).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Instructor Deleted")
        this.getAllInstructor();
    });
 
  }


}