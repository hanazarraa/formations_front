import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesFormateursComponent } from './demandes-formateurs.component';

describe('DemandesFormateursComponent', () => {
  let component: DemandesFormateursComponent;
  let fixture: ComponentFixture<DemandesFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesFormateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
