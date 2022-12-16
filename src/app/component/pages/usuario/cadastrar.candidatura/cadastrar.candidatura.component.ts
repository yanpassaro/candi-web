import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {VagaService} from "../../../../service/vaga.service";
import {Vaga} from "../../../../interface/vaga";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-cadastro.usuario',
  templateUrl: './cadastrar.candidatura.component.html',
  styleUrls: ['./cadastrar.candidatura.component.css']
})
export class CadastarCandidaturasComponent implements OnInit {
  message?: string
  error = false
  id: any
  vaga?: Vaga

  constructor(private router: Router, private activeRouter: ActivatedRoute, private vagaService: VagaService) {
  }

  ngOnInit(): void {
    this.activeRouter.params.pipe(
      tap(n => {
          this.id = n?.['id']
          console.log(this.id)
        }
      ),
      catchError(error => {
        this.message = error.error.message
        this.error = true
        return error
      })
    )
  }

  cadastrar() {

  }
}
