import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInImplementationComponent } from './projects-in-implementation.component';

describe('ProjectsInImplementationComponent', () => {
  let component: ProjectsInImplementationComponent;
  let fixture: ComponentFixture<ProjectsInImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsInImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsInImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
