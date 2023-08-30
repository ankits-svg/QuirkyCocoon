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
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }