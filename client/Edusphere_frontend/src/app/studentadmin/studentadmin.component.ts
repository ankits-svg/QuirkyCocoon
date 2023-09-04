import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadmin',
  templateUrl: './studentadmin.component.html',
  styleUrls: ['./studentadmin.component.css']
})
export class StudentadminComponent {
  StudentArray : any[] = [];
 
  name: string = '';
  gender: string = '';
  date_of_birth: string = '';
  major:string='';
  email: string = '';
  contact_number: string = '';

currentStudentID = "";

constructor(private http: HttpClient, private router: Router )
{
  this.getAllStudent();

}

// saveRecords()
// {

//   let bodyData = {
//     "name" : this.name,
//   "gender": this.gender,
//   "date_of_birth": this.date_of_birth,
//   "major":this.major,
//   "email": this.email,
//   "contact_number": this.contact_number
//   };

//   if(bodyData.name!=='' && bodyData.major!=='' && bodyData.gender!==''){
//     this.http.post("http://127.0.0.1:8000/students/create",bodyData).subscribe((res: any)=>
//   {
//       console.log("gettin the ID",res);
//         alert("Student Registered Successfully");
//       this.router.navigate(['/home']);
     
//       this.getAllStudent();
//       this.name = '';
//       this.gender = '';
//       this.date_of_birth = '';
//       this.major='';
//       this.email='';
//       this.contact_number='';
//   });
//   }else{
//     alert('Please fill the required details!!')
//   }
  
  
// }


getAllStudent()
{
  this.http.get("http://127.0.0.1:8000/students")
  .subscribe((res: any)=>
  {
      console.log(res);
      this.StudentArray = res;
  });
}


// setUpdate(data: any)
// {
//  this.name = data.name;
//  this.gender = data.gender;
//  this.date_of_birth = data.date_of_birth;
//  this.major=data.major;
//  this.email=data.email;
//  this.contact_number=data.contact_number;
//  this.currentStudentID = data.student_id;
 
// }



// UpdateRecords()
// {
//   let bodyData = 
//   {
//     "name" : this.name,
//   "gender": this.gender,
//   "date_of_birth": this.date_of_birth,
//   "major":this.major,
//   "email": this.email,
//   "contact_number": this.contact_number
//   };
  
//   this.http.put(`http://127.0.0.1:8000/students/update/${this.currentStudentID}`, bodyData).subscribe((resultData: any)=>
//   {
//       console.log(resultData);
//       alert("Student Registered Updateddd")
//       this.name = '';
//       this.gender = '';
//       this.date_of_birth = '';
//       this.major='';
//       this.email='';
//       this.contact_number='';
//       this.getAllStudent();
//   });
// }


setDelete(data: any)
{
  this.http.delete(`http://127.0.0.1:8000/students/delete/${data.student_id}`).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("Student Deleted")
      this.getAllStudent();
  });

}
}
