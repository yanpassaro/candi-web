import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastarCandidaturasComponent } from './cadastrar.candidatura.component';

describe('CadastroUsuarioComponent', () => {
  let component: CadastarCandidaturasComponent;
  let fixture: ComponentFixture<CadastarCandidaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastarCandidaturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastarCandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
