import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPerfilUsuarioComponent } from './visualizar.perfil.usuario.component';

describe('VisualizarPerfilUsuarioComponent', () => {
  let component: VisualizarPerfilUsuarioComponent;
  let fixture: ComponentFixture<VisualizarPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarPerfilUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
