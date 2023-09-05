import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


interface course {
  course_code: number;
  // Add other properties here...
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent{
  CourseArray : any[] = [];
  randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  Number= Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    course_code:string= `Web_${this.randomNumber.toString()}`;
    course_name:string='';
    department:string='';
    credits:number=this.Number;
    description:string='';
    
    
 
  currentStudentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllCourse();
 
  }
 
  saveRecords()
  {
  
    let bodyData = {
    "course_code" : this.course_code,
    "course_name": this.course_name,
    "department" : this.department,
    "credits": this.credits,
    "description": this.description
    };
 
    if(bodyData.description!=='' && bodyData.department!=='' && bodyData.credits!==0){
      this.http.post<course[]>("http://127.0.0.1:8000/courses/create",bodyData).subscribe((res: course[])=>
    {
        // console.log("gettin the ID",res[res.length-1]);
        alert('New Course Is Successfully Added on Student LMS');
        this.getAllCourse();
        this.course_code = '';
        this.course_name = '';
        this.department='';
        this.credits=0;
        this.description=''
    });
    }
  }
 
 
  getAllCourse()
  {
    this.http.get("http://127.0.0.1:8000/courses")
    .subscribe((res: any)=>
    {
        console.log(res);
        this.CourseArray = res;
    });
  }
 
 
  setUpdate(data: any)
  {
    this.course_code = data.course_code;
    this.course_name = data.course_name;
    this.department=data.department;
    this.credits=data.credits;
    this.description=data.description;
   this.currentStudentID = data.course_id;
   
  }
 
 
 
  UpdateRecords()
  {
    let bodyData = 
    {
    "course_code" : this.course_code,
    "course_name": this.course_name,
    "department" : this.department,
    "credits": this.credits,
    "description": this.description
    };
    
    this.http.put(`http://127.0.0.1:8000/courses/update/${this.currentStudentID}`, bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Course Updation Successfully Done")
        this.course_code = '';
        this.course_name = '';
        this.department='';
        this.credits=0;
        this.description=''
        this.getAllCourse();
    });
  }


  setDelete(data: any)
  {
    this.http.delete(`http://127.0.0.1:8000/courses/delete/${data.course_id}`).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Course Deleted")
        this.getAllCourse();
    });
 
  }


}