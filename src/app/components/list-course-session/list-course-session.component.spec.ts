import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseSessionComponent } from './list-course-session.component';

describe('ListCourseSessionComponent', () => {
  let component: ListCourseSessionComponent;
  let fixture: ComponentFixture<ListCourseSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourseSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
