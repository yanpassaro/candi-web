import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VagaService} from "../../../../service/vaga.service";
import {Vaga} from "../../../../interface/vaga";

@Component({
  selector: 'app-cadastro.usuario',
  templateUrl: './cadastrar.candidatura.component.html',
  styleUrls: ['./cadastrar.candidatura.component.css']
})
export class CadastarCandidaturasComponent implements OnInit {
  vagaCadastrada?:boolean;
  message?: string;
  idVaga?: any;
  token?: any;
  vaga!: Vaga;

  cadastroForm = new FormGroup({
    respostas: new FormArray([
      new FormControl([''])
    ])
  })

  constructor(private router: Router, private activeRouter: ActivatedRoute, private vagaService: VagaService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null) {
      this.router.navigate(["login"])
    }
    this.token = localStorage.getItem('token')
    this.activeRouter.params.subscribe(
      r => {
        this.idVaga = r?.['id']
        console.log(this.idVaga)
      }
    )
    this.vagaService.detalhar(this.idVaga).subscribe(
      r => {
        console.log(r.data)
        this.vaga = r.data!
        this.vagaCadastrada = true;
      }
    )
  }

  get respostas(): FormArray {
    return this.cadastroForm.get('respostas') as FormArray;
  }

  voltar() {
    this.router.navigate(["/"]).then()
  }

  onSubmit() {

  }
}
