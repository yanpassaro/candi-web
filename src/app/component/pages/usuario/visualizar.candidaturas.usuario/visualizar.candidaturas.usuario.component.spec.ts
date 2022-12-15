import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCandidaturasUsuarioComponent } from './visualizar.candidaturas.usuario.component';

describe('VisualizarCandidaturasUsuarioComponent', () => {
  let component: VisualizarCandidaturasUsuarioComponent;
  let fixture: ComponentFixture<VisualizarCandidaturasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarCandidaturasUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarCandidaturasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
