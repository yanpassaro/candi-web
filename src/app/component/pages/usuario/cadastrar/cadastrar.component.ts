import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsuarioService} from "../../../../service/usuario.service";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  messagem?: string
  usuario = new FormGroup({
    nome: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
    sobrenome: new FormControl(null, [
      Validators.max(30)
    ]),
    email: new FormControl(null, [
      Validators.email,
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
    cSenha: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
    senha: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
    sobre: new FormControl(null, [
      Validators.maxLength(500)
    ])
    ,
    endereco: new FormGroup({
      cep: new FormControl(null, [
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      cidade: new FormControl(null, [
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      estado: new FormControl(null, [
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
    }),
    contato: new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      telefone: new FormControl(null, [
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      site: new FormControl(null, [
        Validators.minLength(8),
        Validators.maxLength(30)
      ])
    })
  })

  constructor(private router: Router, private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
  }

  get nome(): FormControl {
    return this.usuario.get('nome') as FormControl;
  }

  get sobrenome(): FormControl {
    return this.usuario.get('sobrenome') as FormControl;
  }

  get email(): FormControl {
    return this.usuario.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.usuario.get('senha') as FormControl;
  }

  get sobre(): FormControl {
    return this.usuario.get('sobre') as FormControl;
  }

  get cSenha() {
    return this.usuario.get('cSenha') as FormControl
  }

  senhaDiferentes() {
    return this.senha.getRawValue() != this.cSenha.getRawValue();
  }

  onSubmit() {
    this.usuarioService.register(this.usuario.value).pipe(
      tap(r => {
        this.messagem = r.message
      }),
      catchError(error => {
          this.messagem = error.error.message
          return error
        }
      )
    )
  }
}

