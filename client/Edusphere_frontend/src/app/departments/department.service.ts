import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from './department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [];

  constructor() {}

  // Simulate fetching departments from a server or database
  getDepartments(): Observable<Department[]> {
    return of(this.departments);
  }

  // Simulate adding a department
  addDepartment(newDepartment: Department): Observable<void> {
    this.departments.push(newDepartment);
    return of();
  }

  // Simulate updating a department
  updateDepartment(updatedDepartment: Department): Observable<void> {
    const index = this.departments.findIndex(d => d.department_id === updatedDepartment.department_id);
    if (index !== -1) {
      this.departments[index] = updatedDepartment;
    }
    return of();
  }

  // Simulate deleting a department
  deleteDepartment(departmentId: number): Observable<void> {
    const index = this.departments.findIndex(d => d.department_id === departmentId);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
    return of();
  }
}
