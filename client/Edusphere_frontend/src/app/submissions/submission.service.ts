import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Submission } from './submission.model';


@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private apiUrl = 'http://localhost:4200'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}
  

  getAllSubmissions(): Observable<Submission[]> {
    const url = `${this.apiUrl}submissions/`;
    return this.http.get<Submission[]>(url);
  }

  createSubmission(submission: Submission): Observable<any> {
    const url = `${this.apiUrl}/submissions/`;
    return this.http.post(url, submission);
  }

  getSubmission(submissionId: number): Observable<any> {
    const url = `${this.apiUrl}/submissions/${submissionId}/`;
    return this.http.get(url);
  }

  updateSubmission(submission: Submission): Observable<any> {
    const url = `${this.apiUrl}/submissions/${submission.submission_id}/update/`;
    return this.http.put(url, submission);
  }

  deleteSubmission(submissionId: number): Observable<any> {
    const url = `${this.apiUrl}/submissions/${submissionId}/delete/`;
    return this.http.delete(url);
  }
}
