import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPerfilEmpresaComponent } from './visualizar.perfil.empresa.component';

describe('VisualizarPerfilEmpresaComponent', () => {
  let component: VisualizarPerfilEmpresaComponent;
  let fixture: ComponentFixture<VisualizarPerfilEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarPerfilEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarPerfilEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
