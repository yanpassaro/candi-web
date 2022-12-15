import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmpresaService} from "../../../../service/empresa.service";


@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {
  ok: boolean = false;
  message?: string;
  error?: boolean;
  administradoresMax!: boolean;
  administradorInvalido = false;

  empresaForm = new FormGroup({
    nome: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    cnpj: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.maxLength(14)]),
    sobre: new FormControl([''], [Validators.maxLength(500)]),
    endereco: new FormGroup({
      cep: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
      cidade: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
      estado: new FormControl(null, [Validators.minLength(8), Validators.maxLength(8)]),
    }),
    contato: new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(30)]),
      telefone: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      site: new FormControl(null, [Validators.minLength(8), Validators.maxLength(30)]),
      portfolio: new FormControl(null),
    }),
    administradores: new FormArray([
      new FormGroup({
        nome: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
        sobrenome: new FormControl(null, [Validators.max(30)]),
        email: new FormControl(null, [Validators.email, Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
        cSenha: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
        senha: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
        sobre: new FormControl(null, [Validators.maxLength(500)])
      })
    ])
  })

  constructor(private router: Router, private empresaService: EmpresaService) {
  }

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

  get administradores(): FormArray {
    return this.empresaForm.get('administradores')! as FormArray;
  }

  get endereco(){
    return this.empresaForm.get('endereco')
  }

  get contato(){
    return this.empresaForm.get('contato')
  }

  addAdministrador() {
    if (this.administradores.length < 10) {
      this.administradores.push(
        new FormGroup({
          nome: new FormControl(null),
          sobrenome: new FormControl(null),
          email: new FormControl(null),
          cSenha: new FormControl(null),
          senha: new FormControl(null),
          sobre: new FormControl(null)
        })
      )
      this.administradoresMax = false;
    } else {
      this.administradoresMax = true;
    }
  }

  onSubmit() {
    this.empresaService.register(this.empresaForm.value).subscribe(
      a => {
        this.ok = true
        console.log(a.message)
      }, error => {
        if (error.error.status == 400) {
          this.error = true;
          this.message = error.error.message
        }
        if (error.status == 500) {
          throw error.error.message
        }
        console.log(error.error.message)
      }
    )
  }

  removeAdmin(i: number) {
    if (this.administradores.length >= 1){
      this.administradores.removeAt(i)
    }
  }

  voltar() {
    this.router.navigate([""])
  }
}

