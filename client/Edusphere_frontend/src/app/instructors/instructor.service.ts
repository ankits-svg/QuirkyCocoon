import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from './instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private baseUrl = 'http://127.0.0.1:8000'; // Replace with your

  constructor(private http: HttpClient) { }
  
  createInstructor(instructor: Instructor): Observable<Instructor> {
    const url = `${this.baseUrl}/instructors/`; // Replace with your API endpoint
    return this.http.post<Instructor>(url, instructor);
  }

  getAllInstructors(): Observable<Instructor[]> {
    const url = `${this.baseUrl}/instructors/`; // Replace with your API endpoint
    return this.http.get<Instructor[]>(url);
  }

  deleteInstructor(instructorId: number): Observable<void> {
    const url = `${this.baseUrl}/instructors/${instructorId}/`; // Replace with your API endpoint
    return this.http.delete<void>(url);
  }

  updateInstructor(instructor: Instructor): Observable<any> {
    const url = `${this.baseUrl}/instructors/${instructor.id}/update/`;
    return this.http.put(url, instructor);
  }
}