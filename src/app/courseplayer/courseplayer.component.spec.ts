import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseplayerComponent } from './courseplayer.component';

describe('CourseplayerComponent', () => {
  let component: CourseplayerComponent;
  let fixture: ComponentFixture<CourseplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
