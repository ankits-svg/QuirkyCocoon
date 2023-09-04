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
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AlreadyComponent } from './already/already.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudentadminComponent } from './studentadmin/studentadmin.component';
import { SubmissionadminComponent } from './submissionadmin/submissionadmin.component';
import { EnrollmentsadminComponent } from './enrollmentsadmin/enrollmentsadmin.component';


const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'studentsadmin', component: StudentadminComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'announcements', component: AnnouncementsComponent},
  { path: 'assignments', component: AssignmentsComponent},
  { path: 'courses', component: CoursesComponent},
  { path: 'departments', component: DepartmentsComponent},
  { path: 'enrollments', component: EnrollmentsComponent},
  { path: 'enrollmentsadmin', component: EnrollmentsadminComponent},
  { path: 'submissions', component: SubmissionsComponent},
  { path: 'submissionsadmin', component: SubmissionadminComponent},
  { path: 'home', component: HomeComponent},
  { path: 'main', component: MainComponent},
  { path: 'already', component: AlreadyComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'adminhome', component: AdminhomeComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
