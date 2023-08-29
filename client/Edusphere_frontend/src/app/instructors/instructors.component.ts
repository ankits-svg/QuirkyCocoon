import { Component, OnInit } from '@angular/core';
import { Instructor } from './instructor.model';
import { InstructorService } from './instructor.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
  instructors: Instructor[] = [];
  newInstructor: Instructor = new Instructor();

  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.loadInstructors();
  }

  loadInstructors(): void {
    this.instructorService.getAllInstructors().subscribe(
      (instructors: Instructor[]) => this.instructors = instructors
    );
  }

  createInstructor(): void {
    this.instructorService.createInstructor(this.newInstructor).subscribe(
      () => {
        this.loadInstructors();
        this.newInstructor = new Instructor(); // Clear form data
      }
    );
  }

  editInstructor(instructor: Instructor): void {
    // Set the newInstructor object to the instructor to be edited
    this.newInstructor = { ...instructor };
  }

  updateInstructor(): void {
    this.instructorService.updateInstructor(this.newInstructor).subscribe(
      () => {
        this.loadInstructors();
        this.newInstructor = new Instructor(); // Clear form data after update
      }
    );
  }

  deleteInstructor(instructorId: number): void {
    this.instructorService.deleteInstructor(instructorId).subscribe(
      () => this.loadInstructors()
    );
  }
}
