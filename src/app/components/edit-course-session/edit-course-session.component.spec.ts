import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourseSessionComponent } from './edit-course-session.component';

describe('EditCourseSessionComponent', () => {
  let component: EditCourseSessionComponent;
  let fixture: ComponentFixture<EditCourseSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourseSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
