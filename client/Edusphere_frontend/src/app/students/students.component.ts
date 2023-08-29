import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  studentForm: FormGroup;
  students: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      major: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact_number: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents() {
    this.http.get<any[]>('http://localhost:42/students/').subscribe(
      (students) => {
        this.students = students;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const formData = this.studentForm.value;
      this.http.post('http://localhost:4200/students/', formData).subscribe(
        () => {
          this.fetchStudents();
          this.studentForm.reset();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  deleteStudent(studentId: number) {
    this.http
      .delete(`http://localhost:8000/students/${studentId}/delete/`)
      .pipe(
        catchError((error) => {
          console.error("Error deleting student:", error);
          return []; // Return an empty array or any other appropriate value
        })
      )
      .subscribe(() => {
        this.fetchStudents();
      });
  }
}
