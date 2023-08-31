import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student.model';

const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://127.0.0.1:8000'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`);
  }

  getStudent(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/students/${studentId}`);
  }



  createStudent(student: Student): Observable<Student> {
    const data = {
      "name": student.student_name,
      "gender": student.student_gender,
      "date_of_birth": student.student_dob,
      "major": student.student_major,
      "email": student.student_email,
      "contact_number": student.student_contact
    }
    return this.http.post<Student>(`${this.baseUrl}/students/create`, data, httpHeaders);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/students/${student.student_id}/update`, student, httpHeaders);
  }

  deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/students/${studentId}/delete`);
  }
}
