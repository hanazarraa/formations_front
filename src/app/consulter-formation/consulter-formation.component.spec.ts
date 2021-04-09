import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterFormationComponent } from './consulter-formation.component';

describe('ConsulterFormationComponent', () => {
  let component: ConsulterFormationComponent;
  let fixture: ComponentFixture<ConsulterFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
