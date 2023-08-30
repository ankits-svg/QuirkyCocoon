import { Component, OnInit } from '@angular/core';
import { Enrollment } from './enrollment.model';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent implements OnInit {
  enrollments: Enrollment[] = [];
  newEnrollment: Enrollment = new Enrollment();

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.loadEnrollments();
  }

  loadEnrollments(): void {
    // Load enrollments logic using enrollmentService
    this.enrollmentService.getStudentEnrollments(1) // Replace with actual student ID
      .subscribe(enrollments => {
        this.enrollments = enrollments;
      });
  }

  enrollStudent(): void {
    // Enroll student logic using enrollmentService
    this.enrollmentService.enrollStudentInCourse(this.newEnrollment)
      .subscribe(() => {
        this.loadEnrollments();
        this.newEnrollment = new Enrollment(); // Clear form data
      });
  }

  // Add edit, update, and delete methods as needed
}
