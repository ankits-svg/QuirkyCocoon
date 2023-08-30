import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentService } from './assignment.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[] = [];
  newAssignment: Assignment = new Assignment();

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    this.loadAssignments();
  }

  loadAssignments(): void {
    this.assignmentService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
    });
  }

  createAssignment(): void {
    this.assignmentService.createAssignment(this.newAssignment).subscribe(() => {
      this.loadAssignments();
      this.newAssignment = new Assignment(); // Clear the form
    });
  }

  deleteAssignment(id: number): void {
    this.assignmentService.deleteAssignment(id).subscribe(() => {
      this.loadAssignments();
    });
  }
}
