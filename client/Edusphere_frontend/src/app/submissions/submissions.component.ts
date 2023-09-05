import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent{
  SubmissionArray : any[] = [];
  assign: string | null = localStorage.getItem('assignments');
  studes: string | null = localStorage.getItem('studentdetails');
  assignment: number=this.assign ? JSON.parse(this.assign).assignment_id : 0; // You can use the assignment ID here
  student: number=this.studes ? JSON.parse(this.studes).student_id : 0;; // You can use the student ID here
  submission_date: string='';
  status: string='';
  remarks: string='';

currentID = "";

constructor(private http: HttpClient, private router: Router )
{
  this.getAllSubmission();

}



saveRecords()
{

  let bodyData = {
    "assignment" : this.assignment,
    "student": this.student,
    "submission_date": this.submission_date,
    "status":this.status,
    "remarks": this.remarks
  };

  if(bodyData.status!=='' && bodyData.remarks!=='' && bodyData.student!==0){
    this.http.post("http://127.0.0.1:8000/submissions/create",bodyData).subscribe((res: any)=>
  {
      console.log("gettin the ID",res);
      alert("Assignment Submission Done Successfully");
      setTimeout(()=>{
        this.router.navigate(['/assignments']);
      },2000)
      this.getAllSubmission();
      this.assignment = 0;
      this.student = 0;
      this.submission_date = '';
      this.status='';
      this.remarks='';
  });
  }else{
    alert('Please fill the required details!!')
  }
}


getAllSubmission()
{
  this.http.get("http://127.0.0.1:8000/submissions")
  .subscribe((res: any)=>
  {
      console.log(res);
      this.SubmissionArray = res;
  });
}


setUpdate(data: any)
{
 this.assignment = data.assignment_id;;
 this.student = data.student_id;
 this.submission_date = data.submission_date;
 this.status=data.status;
 this.remarks=data.remarks;
 this.currentID = data.submission_id;
 
}



UpdateRecords()
{
  let bodyData = 
  {
    "assignment" : this.assignment,
  "student": this.student,
  "submission_date": this.submission_date,
  "status":this.status,
  "remarks": this.remarks
  };
  
  this.http.put(`http://127.0.0.1:8000/submissions/update/${this.currentID}`, bodyData).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("Submission updated succesfully")
      this.assignment = 0;
      this.student = 0;
      this.submission_date = '';
      this.status='';
      this.remarks='';
      this.getAllSubmission();
  });
}


setDelete(data: any)
{
  this.http.delete(`http://127.0.0.1:8000/submissions/delete/${data.submission_id}`).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("Submission Deleted")
      this.getAllSubmission();
  });

}


}