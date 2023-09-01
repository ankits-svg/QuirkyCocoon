import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent {
  AssignmentArray: any[] = [];

  course: number | null = null; // Add course property

  title: string = '';
  description: string = '';
  due_date: string = '';

  currentAssignmentID = '';

  constructor(private http: HttpClient) {
    this.getAllAssignment();
  }

  saveRecords() {
    let bodyData = {
      'course': this.course, // Include course
      'title': this.title,
      'description': this.description,
      'due_date': this.due_date,
    };

    this.http.post('http://127.0.0.1:8000/assignments/create', bodyData).subscribe((res: any) => {
      console.log('Getting the ID', res);
      alert('Assignment Created Successfully');
      this.getAllAssignment();
      this.course = null; // Reset course to null
      this.title = '';
      this.description = '';
      this.due_date = '';
    });
  }

  getAllAssignment() {
    this.http.get('http://127.0.0.1:8000/assignments').subscribe((res: any) => {
      console.log(res);
      this.AssignmentArray = res;
    });
  }

  setUpdate(data: any) {
    this.course = data.course; // Set course
    this.title = data.title;
    this.description = data.description;
    this.due_date = data.due_date;
    this.currentAssignmentID = data.assignment_id;
  }

  UpdateRecords() {
    let bodyData = {
      'course': this.course, // Include course
      'title': this.title,
      'description': this.description,
      'due_date': this.due_date,
    };

    this.http.put(`http://127.0.0.1:8000/assignments/update/${this.currentAssignmentID}`, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Assignment Updated Successfully');
      this.course = null; // Reset course to null
      this.title = '';
      this.description = '';
      this.due_date = '';
      this.getAllAssignment();
    });
  }

  setDelete(data: any) {
    this.http.delete(`http://127.0.0.1:8000/assignments/delete/${data.assignment_id}`).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Assignment Deleted');
      this.getAllAssignment();
    });
  }
}
