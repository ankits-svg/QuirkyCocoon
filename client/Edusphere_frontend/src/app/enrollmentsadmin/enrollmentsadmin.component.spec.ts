import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsadminComponent } from './enrollmentsadmin.component';

describe('EnrollmentsadminComponent', () => {
  let component: EnrollmentsadminComponent;
  let fixture: ComponentFixture<EnrollmentsadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollmentsadminComponent]
    });
    fixture = TestBed.createComponent(EnrollmentsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
