import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent{
  EnrollmentArray : any[] = [];
 
    student_id: number = 0;
    course_id: number = 0;
    enrollment_date: string = '';
 
  currentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllEnrollment();
 
  }
 
  saveRecords()
  {
  
    let bodyData = {
      "student_id" : this.student_id,
    "course_id": this.course_id,
    "enrollment_date": this.enrollment_date
    };
 
    this.http.post("http://127.0.0.1:8000/enrollments/create",bodyData).subscribe((res: any)=>
    {
        console.log("gettin the ID",res);
        alert("Enrollment Successfully");
        this.getAllEnrollment();
        this.student_id = 0;
        this.course_id = 0;
        this.enrollment_date = '';
        
    });
  }
 
 
  getAllEnrollment()
  {
    this.http.get("http://127.0.0.1:8000/enrollments")
    .subscribe((res: any)=>
    {
        console.log(res);
        this.EnrollmentArray = res;
    });
  }
 



  setDelete(data: any)
  {
    this.http.delete(`http://127.0.0.1:8000/enrollments/delete/${data.student_id}`).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Instructor Deleted")
        this.getAllEnrollment();
    });
 
  }


}