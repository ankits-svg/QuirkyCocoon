import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from './enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private baseUrl = 'http://127.0.0.1:8000'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  getStudentEnrollments(studentId: number): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.baseUrl}/students/${studentId}/enrollments/`);
  }

  enrollStudentInCourse(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.post<Enrollment>(`${this.baseUrl}/enrollments/`, enrollment);
  }

  // Implement other CRUD operations as needed
}
