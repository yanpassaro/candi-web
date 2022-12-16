import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VagaService} from "../../../../service/vaga.service";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-cadastrar.vaga',
  templateUrl: './cadastrar.vaga.component.html',
  styleUrls: ['./cadastrar.vaga.component.css']
})
export class CadastrarVagaComponent implements OnInit {
  message?: string
  error = false
  vaga = new FormGroup({
    nome: new FormControl(null, [
      Validators.required,
      Validators.max(50)
    ]),
    beneficios: new FormControl(null, [
      Validators.required
    ]),
    dataTermino: new FormControl(null, [
      Validators.required
    ]),
    tipo: new FormControl(null, [
      Validators.required
    ]),
    sobre: new FormControl(null, [
      Validators.max(500)
    ]),
  })

  constructor(private vagaService: VagaService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.vaga.valid) {
      this.vagaService.register(this.vaga.value).pipe(
        tap(r => {
          this.message = r.message
        }),
        catchError(error => {
            this.message = error.error.message
            return error
          }
        )
      )
    } else {
      this.vaga.markAllAsTouched();
    }
  }

  get nome(): FormControl {
    return this.vaga.get('nome') as FormControl;
  }

  get beneficios(): FormControl {
    return this.vaga.get('beneficios') as FormControl;
  }

  get dataTermino(): FormControl {
    return this.vaga.get('dataTermino') as FormControl;
  }

  get sobre(): FormControl {
    return this.vaga.get('sobre') as FormControl;
  }

  get tipo(): FormControl {
    return this.vaga.get('tipo') as FormControl;
  }
}
