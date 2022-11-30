import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisarCandidaturaEmpresaComponent } from './analisar.candidatura.empresa.component';

describe('AnalisarCandidaturaEmpresaComponent', () => {
  let component: AnalisarCandidaturaEmpresaComponent;
  let fixture: ComponentFixture<AnalisarCandidaturaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisarCandidaturaEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisarCandidaturaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
