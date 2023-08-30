import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  newCourse: Course = new Course();
  editingCourse: Course | null = null;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  saveCourse(): void {
    // Perform the save logic here
    console.log('Course saved:', this.editingCourse);
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  createCourse(): void {
    this.courseService.createCourse(this.newCourse).subscribe(() => {
      this.loadCourses();
      this.newCourse = new Course(); // Clear the form
    });
  }

  editCourse(course: Course): void {
    this.editingCourse = { ...course };
  }

  updateCourse(): void {
    if (this.editingCourse) {
      this.courseService.updateCourse(this.editingCourse).subscribe(() => {
        this.loadCourses();
        this.editingCourse = null;
      });
    }
  }

  cancelEdit(): void {
    this.editingCourse = null;
  }

  deleteCourse(courseId: number): void {
    this.courseService.deleteCourse(courseId).subscribe(() => {
      this.loadCourses();
    });
  }
}
