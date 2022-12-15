import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCandidaturasEmpresaComponent } from './visualizar.candidaturas.empresa.component';

describe('VisualizarCandidaturasEmpresaComponent', () => {
  let component: VisualizarCandidaturasEmpresaComponent;
  let fixture: ComponentFixture<VisualizarCandidaturasEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarCandidaturasEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarCandidaturasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
