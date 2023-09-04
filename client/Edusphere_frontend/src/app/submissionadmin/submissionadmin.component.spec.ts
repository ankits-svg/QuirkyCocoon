import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionadminComponent } from './submissionadmin.component';

describe('SubmissionadminComponent', () => {
  let component: SubmissionadminComponent;
  let fixture: ComponentFixture<SubmissionadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionadminComponent]
    });
    fixture = TestBed.createComponent(SubmissionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
