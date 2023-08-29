import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CoursesComponent } from './courses/courses.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { SubmissionsComponent } from './submissions/submissions.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'announcements', component: AnnouncementsComponent},
  { path: 'assignments', component: AssignmentsComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'departments', component: DepartmentsComponent},
  { path: 'enrollments', component: EnrollmentsComponent},
  { path: 'submissions', component: SubmissionsComponent},
  { path: '', redirectTo: '/students', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
