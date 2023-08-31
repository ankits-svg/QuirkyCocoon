import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = new Student();
  editingStudent: Student | null = null;
  
  
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe(
      res => {
        this.students = res
        console.log(res)
        console.log("data:",this.students)
      }
    );
 

  }

  createStudent(): void {
    console.log("create:",this.newStudent)
    
    this.studentService.createStudent(this.newStudent).subscribe(
      (res) => {
        console.log(res)
        // this.loadStudents();
        this.newStudent = new Student(); // Clear form data
      }
    );
  }

  editStudent(student: Student): void {
    this.editingStudent = { ...student };
  }

  updateStudent(): void {
    if (this.editingStudent) {
      this.studentService.updateStudent(this.editingStudent).subscribe(
        () => {
          this.loadStudents();
          this.editingStudent = null; // Clear editing state
        }
      );
    }
  }

  cancelEditing(): void {
    this.editingStudent = null; // Clear editing state
  }

  deleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId).subscribe(
      () => this.loadStudents()
    );
  }
}
