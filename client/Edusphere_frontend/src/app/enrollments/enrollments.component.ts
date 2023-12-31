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
  enrollItem: string | null = localStorage.getItem('enroll');
  studentItem: string | null = localStorage.getItem('studentdetails');
    student: number = this.studentItem ? JSON.parse(this.studentItem).student_id : 0;
    course: number = this.enrollItem ? JSON.parse(this.enrollItem).course_id : 0;
    enrollment_date: string = '';
 
  currentID = "";
 
  constructor(private http: HttpClient)
  {
    this.getAllEnrollment();
 
  }
  
 
  saveRecords()
  {
  
    let bodyData = {
      "student" : this.student,
    "course": this.course,
    "enrollment_date": this.enrollment_date
    };
 
    this.http.post("http://127.0.0.1:8000/enrollments/create",bodyData).subscribe((res: any)=>
    {
        console.log("gettin the ID",res);
        alert("Enrollment Successfully");
        this.getAllEnrollment();
        this.student = 0;
        this.course = 0;
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
    this.http.delete(`http://127.0.0.1:8000/enrollments/delete/${data.student}`).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Instructor Deleted")
        this.getAllEnrollment();
    });
 
  }


}