import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-instructor',
  templateUrl: './course-instructor.component.html',
  styleUrls: ['./course-instructor.component.css']
})
export class CourseInstructorComponent {
  CourseArray : any[] = [];
  InstructorArray : any[] = [];
  DepartmentArray: any[] = [];
  course_code:string='';
  course_name:string='';
  department:string='';
  credits:number=0;
  description:string='';
  
  
  
currentStudentID = "";

constructor(private http: HttpClient, private router: Router )
{
  this.getAllCourse();
  this.getAllInstructor();
  this.getAllDepartment();

}

enroll(data:any){
  this.router.navigate(['/enrollments']);
  localStorage.setItem('enroll',JSON.stringify(data))
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

  this.http.post("http://127.0.0.1:8000/courses/create",bodyData).subscribe((res: any)=>
  {
      console.log("gettin the ID",res);
      alert("Student Registered Successfully");
      this.getAllCourse();
      this.course_code = '';
      this.course_name = '';
      this.department='';
      this.credits=0;
      this.description=''
  });
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
      alert("Student Registered Updateddd")
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
      alert("Student Deleted")
      this.getAllCourse();
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

  getAllDepartment()
  {
    this.http.get("http://127.0.0.1:8000/departments")
    .subscribe((res: any)=>
    {
        console.log(res);
        this.DepartmentArray = res;
    });
  }
}
