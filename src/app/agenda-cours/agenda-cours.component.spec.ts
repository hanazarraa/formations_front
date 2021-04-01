import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCoursComponent } from './agenda-cours.component';

describe('AgendaCoursComponent', () => {
  let component: AgendaCoursComponent;
  let fixture: ComponentFixture<AgendaCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
