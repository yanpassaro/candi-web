import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmpresaService} from "C:/Users/Yan/app-candi/src/app/service/empresa.service";
import {catchError, of, tap} from "rxjs";

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {
  ok: boolean = false;
  emailCadastrado?: boolean;
  cnpjCadastrado?: boolean;

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
    administradores: new FormArray({
      nomeAdmin: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      sobrenome: new FormControl(null, [Validators.max(30)]),
      emailAdmin: new FormControl(null, [Validators.email, Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      cSenha: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      senha: new FormControl(null,[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
      sobre: new FormControl(null,[Validators.maxLength(500)])
    })
  })

     constructor( private router: Router, private empresaService: EmpresaService) { }

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

  get administradores(): FormGroup {
    return this.empresaForm.get('administradores') as FormGroup;
  }

  addAdministrador() {
    if (this.administradores.length < 10) {
      this.administradores.push(
        new FormGroup({
          local: new FormControl(null),
          nome: new FormControl(null),
          sobre: new FormControl(null),
          dataInicio: new FormControl(null),
          dataTermino: new FormControl(null),
          ativo: new FormControl(false)
        })
      )
      this.atividadesMax = false;
    } else {
      this.atividadesMax = true;
    }


  onSubmit() { this.empresaService.register(this.empresaForm.value).subscribe(
    a => {
      this.ok = true
      console.log(a.message)
    }, error => {
      if (error.error.status == 400) {
        this.cnpjCadastrado = true;
      }
      if (error.status == 500) {
        throw error.error.message
      }
      console.log(error.error.message)
    }
  )
  }

}
