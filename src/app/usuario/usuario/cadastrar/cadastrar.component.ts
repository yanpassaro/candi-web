import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsuarioService} from "../../../service/usuario.service";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  emailCadastrado?: boolean;
  atividadesMax?: boolean;
  ok: boolean = false;

  usuarioForm = new FormGroup({
    nome: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    sobrenome: new FormControl([''], [Validators.max(30)]),
    email: new FormControl([''], [Validators.email, Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    cSenha: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    senha: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    sobre: new FormControl([''], [Validators.maxLength(500)])
    ,
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
    atividades: new FormArray([
      new FormGroup({
        local: new FormControl(),
        nome: new FormControl(),
        sobre: new FormControl(),
        dataInicio: new FormControl(),
        dataTermino: new FormControl(),
        ativo: new FormControl(),
      })
    ])
  })


  constructor(private router: Router, private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {}


  get nome(): FormControl {
    return this.usuarioForm.get('nome') as FormControl;
  }

  get sobrenome(): FormControl {
    return this.usuarioForm.get('sobrenome') as FormControl;
  }

  get email(): FormControl {
    return this.usuarioForm.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.usuarioForm.get('senha') as FormControl;
  }

  get sobre(): FormControl {
    return this.usuarioForm.get('sobre') as FormControl;
  }

  get cSenha() {
    return this.usuarioForm.get('cSenha') as FormControl
  }

  get atividades(): FormArray {
    return this.usuarioForm.get('atividades') as FormArray;
  }

  addAtividade() {
    if (this.atividades.length < 2) {
      this.atividades.push(
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
  }

  senhaDiferentes() {
    return this.senha.getRawValue() != this.cSenha.getRawValue();
  }


  removeAtividade(idx: number) {
    if (this.atividades.length > 1) {
      this.atividades.removeAt(idx)
      this.atividadesMax = false;
    }
  }

  voltar() {
    this.router.navigate(["/"]).then(r => r)
  }

  onSubmit() {
    this.usuarioService.register(this.usuarioForm.value).subscribe(
      a => {
        this.ok = true;
        console.log(a.message)
      }, error => {
        if (error.error.status == 400) {
          this.emailCadastrado = true;
        }
        console.log(error.error.message)
      }
    )
  }
}

