import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { CoursesComponent } from './courses/courses.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainComponent } from './main/main.component';
import { AlreadyComponent } from './already/already.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudentadminComponent } from './studentadmin/studentadmin.component';
import { SubmissionadminComponent } from './submissionadmin/submissionadmin.component';
import { EnrollmentsadminComponent } from './enrollmentsadmin/enrollmentsadmin.component';
import { AssignmentadminComponent } from './assignmentadmin/assignmentadmin.component';
import { CourseInstructorComponent } from './course-instructor/course-instructor.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    InstructorsComponent,
    CoursesComponent,
    EnrollmentsComponent,
    AssignmentsComponent,
    SubmissionsComponent,
    DepartmentsComponent,
    AnnouncementsComponent,
    HomeComponent,
    MainComponent,
    AlreadyComponent,
    AdminComponent,
    AdminhomeComponent,
    StudentadminComponent,
    SubmissionadminComponent,
    EnrollmentsadminComponent,
    AssignmentadminComponent,
    CourseInstructorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
