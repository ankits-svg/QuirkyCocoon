import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://127.0.0.1:8000/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getEnrolledCourses(studentId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/enrollements/${studentId}`);
  }

  
}
