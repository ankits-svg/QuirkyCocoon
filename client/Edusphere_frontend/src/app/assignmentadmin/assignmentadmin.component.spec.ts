import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentadminComponent } from './assignmentadmin.component';

describe('AssignmentadminComponent', () => {
  let component: AssignmentadminComponent;
  let fixture: ComponentFixture<AssignmentadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentadminComponent]
    });
    fixture = TestBed.createComponent(AssignmentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
