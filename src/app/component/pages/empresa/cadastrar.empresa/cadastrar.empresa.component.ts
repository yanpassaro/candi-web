import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmpresaService} from "../../../../service/empresa.service";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-cadastrar.empresa',
  templateUrl: './cadastrar.empresa.component.html',
  styleUrls: ['./cadastrar.empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  empresa = new FormGroup({
    nome: new FormControl(null, [
      Validators.required,
      Validators.maxLength(30)
    ]),
    cnpj: new FormControl(null, [
      Validators.minLength(14),
      Validators.maxLength(14)
    ]),
    sobre: new FormControl(null, [
      Validators.maxLength(500)
    ]),
    endereco: new FormGroup({
      cep: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      cidade: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      estado: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
    }),
    contato: new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      telefone: new FormControl(null, [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14)
      ]),
      site: new FormControl(null, [
        Validators.maxLength(100)
      ]),
    })
  })

  constructor(private router: Router, private empresaService: EmpresaService) {
  }

  ngOnInit(): void {}

  get nome(): FormControl {
    return this.empresa.get('nome') as FormControl;
  }

  get cnpj(): FormControl {
    return this.empresa.get('cnpj') as FormControl;
  }

  get sobre(): FormControl {
    return this.empresa.get('sobre') as FormControl;
  }

  get endereco() {
    return this.empresa.get('endereco')
  }

  get contato() {
    return this.empresa.get('contato')
  }

  enviar() {
    if (this.empresa.valid) {
      this.empresaService.cadastrar(this.empresa.value).pipe(
        tap(e => {
          console.log(e.message)
        }),
        catchError(error => {
          console.log(error.error.message)
          return error.error.message
        })
      )
    } else {
      console.log("Formulário inválido")
    }
  }

  voltar() {
    this.router.navigate(["login"]).then(
      n => {
        console.log(n)
      }, error => {
        console.error(error)
      })
  }
}
