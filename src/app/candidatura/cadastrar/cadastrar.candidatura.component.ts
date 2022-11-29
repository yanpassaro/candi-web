import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VagaService} from "../../service/vaga.service";
import {catchError, of} from "rxjs";
import {Vaga} from "../../interface/vaga";

@Component({
  selector: 'app-cadastro.usuario',
  templateUrl: './cadastrar.candidatura.component.html',
  styleUrls: ['./cadastrar.candidatura.component.css']
})
export class CadastarCandidaturasComponent implements OnInit {
  vagaCadastrada?: boolean;
  message?: string;
  idVaga?: any;
  token?: any;
  vaga!: Vaga;

  cadastroForm = new FormGroup({
    vaga: new FormControl(this.idVaga),
    respostas: new FormArray([
      new FormControl('')
    ])

  })

  constructor(private router: Router, private activeRouter: ActivatedRoute, private vagaService: VagaService) {
    this.token = localStorage.getItem('token')
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(['/login']).then()
    }
    this.token = localStorage.getItem('token')
  }

  onSubmit() {
    this.activeRouter.queryParams.subscribe(
      r => this.idVaga = r?.['vaga']
    )
    this.vagaService.detalhar(this.idVaga).subscribe(
      r => {
        if (r.data != null) {
          this.vagaCadastrada = false;
        } else {
          this.vaga = r.data!
          console.log(this.vaga)
        }
      },
      catchError(err => {
          this.message = "Vaga não existe";
          return of(['']);
        }
      )
    )
  }

  get perguntas(): string[]{
    return this.vaga.perguntas! as string[]
  }

  get respostas(): FormArray {
    return this.cadastroForm.get('respostas') as FormArray;
  }

  voltar() {
    this.router.navigate(["/"]).then()
  }
}
