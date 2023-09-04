import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Student {
  student_id: number;
  // Add other properties here...
}

@Component({
  selector: 'app-already',
  templateUrl: './already.component.html',
  styleUrls: ['./already.component.css']
})
export class AlreadyComponent {
  stuid: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  verifyRecords() {
    this.http.get<Student[]>("http://127.0.0.1:8000/students")
      .subscribe((res: Student[]) => {
        console.log("API Response:", res);
        console.log("Provided Student ID:", this.stuid);

        // Find the student by student_id
        const student = res.find((e: Student) => e.student_id === parseInt(this.stuid));

        console.log("Found Student:", student);
        localStorage.setItem('studentdetails',JSON.stringify(student))
        if (student) {
          // If student is found, navigate to home route
          this.router.navigate(['/home']);
        } else {
          // If student is not found, show a warning alert
          alert('Student with the provided ID not found');
        }
      });
  }
}
