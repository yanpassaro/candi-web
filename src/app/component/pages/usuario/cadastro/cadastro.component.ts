import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {UsuarioService} from "../../../../service/usuario.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuarioForm = new FormGroup({
    nome: new FormControl([''], [Validators.required]),
    sobrenome: new FormControl([''], [Validators.required]),
    email: new FormControl([''], [Validators.required, Validators.minLength(8), Validators.minLength(30)]),
    senha: new FormControl([''], [Validators.required]),
    sobre: new FormControl(''),
    endereco: new FormGroup({
      cep: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
    }),
    atividades: new FormArray([
      new FormGroup({
        local: new FormControl(''),
        nome: new FormControl(''),
        sobre: new FormControl(''),
      })
    ])
  })

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuarioService.register(this.usuarioForm.value).subscribe(
      r => console.log(r.mensagem)
    ).closed
  }

  get atividades(): FormArray {
    return this.usuarioForm.get('atividades') as FormArray;
  }

  addAtividade() {
    this.atividades.push(
      new FormGroup({
        local: new FormControl(''),
        nome: new FormControl(''),
        sobre: new FormControl(''),
      })
    );
  }

  removeAtividade(idx: number) {
    if (this.atividades.length > 1) {
      this.atividades.removeAt(idx)
    }
  }
}
