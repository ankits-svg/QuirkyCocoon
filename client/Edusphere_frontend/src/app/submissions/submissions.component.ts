import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent{
  SubmissionArray : any[] = [];
  role: string = 'student';
  assignment: number=0; // You can use the assignment ID here
  student: number=0; // You can use the student ID here
  submission_date: string='';
  status: string='';
  remarks: string='';

currentID = "";

constructor(private http: HttpClient )
{
  this.getAllSubmission();

}

toggleRole() {
  this.role = (this.role === 'student') ? 'admin' : 'student';
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

  this.http.post("http://127.0.0.1:8000/submissions/create",bodyData).subscribe((res: any)=>
  {
      console.log("gettin the ID",res);
      alert("Assignment Submission Done Successfully");
      this.getAllSubmission();
      this.assignment = 0;
      this.student = 0;
      this.submission_date = '';
      this.status='';
      this.remarks='';
  });
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