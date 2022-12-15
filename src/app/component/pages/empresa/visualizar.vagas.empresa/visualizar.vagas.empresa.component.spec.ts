import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarVagasEmpresaComponent } from './visualizar.vagas.empresa.component';

describe('VisualizarVagasEmpresaComponent', () => {
  let component: VisualizarVagasEmpresaComponent;
  let fixture: ComponentFixture<VisualizarVagasEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarVagasEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarVagasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
