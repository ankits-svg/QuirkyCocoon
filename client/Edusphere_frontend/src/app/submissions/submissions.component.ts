import { Component, OnInit } from '@angular/core';
import { Submission } from './submission.model'; // Import the Submission model
import { SubmissionService } from './submission.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {
  submissions: Submission[] = [];
  newSubmission: Submission = new Submission();

  constructor(private submissionService: SubmissionService,
    private router: Router // Import Router service
    ) { }

  ngOnInit(): void {
    this.loadSubmissions();
  }


  loadSubmissions(): void {
    this.submissionService.getAllSubmissions().subscribe(
      submissions => this.submissions = submissions
    );
  }

  createSubmission(): void {
    this.submissionService.createSubmission(this.newSubmission).subscribe(
      () => {
        this.loadSubmissions();
        this.newSubmission = new Submission(); // Clear form data
      }
    );
  }

  editSubmission(submission: Submission): void {
    // Set the newSubmission object to the submission to be edited
    this.newSubmission = { ...submission };
  }

  updateSubmission(): void {
    this.submissionService.updateSubmission(this.newSubmission).subscribe(
      () => {
        this.loadSubmissions();
        this.newSubmission = new Submission(); // Clear form data after update
      }
    );
  }

  deleteSubmission(submissionId: number): void {
    this.submissionService.deleteSubmission(submissionId).subscribe(
      () => this.loadSubmissions()
    );
  }
  navigateToSubmissions(): void {
    this.router.navigate(['/submissions']); // Navigate to submissions route
  }
}
