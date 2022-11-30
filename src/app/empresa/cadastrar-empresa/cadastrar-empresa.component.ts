import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {
  ok: boolean = false;

  empresaForm = new FormGroup({
    nome: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    cnpj: new FormControl([''], [Validators.max(30), Validators.minLength(8), Validators.maxLength(14)]),
    sobre: new FormControl([''], [Validators.email, Validators.maxLength(500)]),

    endereco: new FormGroup({
       cep: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
       cidade: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
       estado: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
    }),

    contato: new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.minLength(8), Validators.maxLength(30)]),
      telefone: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
      site: new FormControl(null, [Validators.minLength(8), Validators.maxLength(30)]),
      portfolio: new FormControl(null, [Validators.minLength(8), Validators.maxLength(30)]),
    }),

    administradores: new FormGroup({
      nome: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      sobrenome: new FormControl([''], [Validators.max(30)]),
      email: new FormControl([''], [Validators.email, Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      cSenha: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      senha: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      sobre: new FormControl([''], [Validators.maxLength(500)])
    })
  })

  constructor() { }

  ngOnInit(): void {}

  get nome(): FormControl {
    return this.empresaForm.get('nome') as FormControl;
  }

  get cnpj(): FormControl {
    return this.empresaForm.get('cnpj') as FormControl;
  }

  get sobre(): FormControl {
    return this.empresaForm.get('sobre') as FormControl;
  }




  onSubmit() {

  }
}
