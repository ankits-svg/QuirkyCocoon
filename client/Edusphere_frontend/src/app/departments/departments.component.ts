import { Component, OnInit } from '@angular/core';
import { Department } from './department.model';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  newDepartment: Department = new Department();

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }

  addDepartment(): void {
    this.departmentService.addDepartment(this.newDepartment).subscribe(() => {
      this.newDepartment = new Department();
      this.getDepartments();
    });
  }

  updateDepartment(updatedDepartment: Department): void {
    this.departmentService.updateDepartment(updatedDepartment).subscribe(() => {
      this.getDepartments();
    });
  }

  deleteDepartment(departmentId: number): void {
    this.departmentService.deleteDepartment(departmentId).subscribe(() => {
      this.getDepartments();
    });
  }
}
