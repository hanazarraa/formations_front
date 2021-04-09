import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEtudiantsComponent } from './inscription-etudiants.component';

describe('InscriptionEtudiantsComponent', () => {
  let component: InscriptionEtudiantsComponent;
  let fixture: ComponentFixture<InscriptionEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
