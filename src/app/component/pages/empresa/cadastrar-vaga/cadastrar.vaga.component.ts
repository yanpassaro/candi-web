import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { VagaService } from "../../../../service/vaga.service";

@Component({
  selector: 'app-cadastrar-vaga',
  templateUrl: './cadastrar.vaga.component.html',
  styleUrls: ['./cadastrar.vaga.component.css']
})
export class CadastrarVagaComponent implements OnInit {
  ok: boolean = false;
  message!: string;

  vagaForm = new FormGroup({
    nome: new FormControl([''], [Validators.required]),
    experiencia: new FormControl([''], [Validators.required]),
    beneficios: new FormControl([''], [Validators.required]),
    dataTermino: new FormControl([''], [Validators.required]),
    tipo: new FormControl([''], [Validators.required]),
    sobre: new FormControl(''),
    perguntas: new FormArray([
      new FormControl('')
    ])
  })

constructor(private vagaService: VagaService) { }

  ngOnInit(): void { }

  onSubmit() {
    this.vagaService.register(this.vagaForm.value).subscribe(
      r => this.ok = true,
      error => {
        this.message = error.error.message
      }
    )
  }

  get nome(): FormControl {
    return this.vagaForm.get('nome') as FormControl;
  }

  get experiencia(): FormControl {
    return this.vagaForm.get('experiencia') as FormControl;
  }

  get beneficios(): FormControl {
    return this.vagaForm.get('beneficios') as FormControl;
  }

  get dataTermino(): FormControl {
    return this.vagaForm.get('dataTermino') as FormControl;
  }

  get sobre(): FormControl {
    return this.vagaForm.get('sobre') as FormControl;
  }

  get perguntas(): FormArray {
    return this.vagaForm.get('perguntas') as FormArray;
  }

  get tipo(): FormControl {
    return this.vagaForm.get('tipo') as FormControl;
  }

  addPerguntas(){
    if(this.perguntas.length < 10){
      this.perguntas.push(
       new FormGroup({
          perguntasv: new FormControl(''),
     })
    )}
  }

  removePerguntas(idx: number) {
    if (this.perguntas.length > 1) {
      this.perguntas.removeAt(idx)
    }
  }

}
