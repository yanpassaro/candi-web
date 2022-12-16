import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CandidaturaService} from "../../../../service/candidatura.service";
import {Candidatura} from "../../../../interface/candidatura";
import {catchError, tap} from "rxjs";

@Component({
  selector: 'app-visualizar.candidaturas.empresa',
  templateUrl: './visualizar.candidaturas.empresa.component.html',
  styleUrls: ['./visualizar.candidaturas.empresa.component.css']
})
export class VisualizarCandidaturasEmpresaComponent implements OnInit {
  id!: number
  candidaturas?: Candidatura[]
  empty = false;

  constructor(private active: ActivatedRoute, private router: Router, private candidaturaService: CandidaturaService) {
  }

  ngOnInit(): void {
    this.active.params.pipe(
      tap(
        r => {
          this.id = r?.['id']
        }),
      catchError(
        error => {
          this.router.navigate(["empresa"]).then(
            n => {
              console.log(n)
            },
            error => {
              console.error(error)
            }
          )
          return error
        }
      )
    )
    this.candidaturaService.visualizarVagas(this.id).pipe(
      tap(r => {
        this.candidaturas = r.data
        if (this.candidaturas?.length == 0) {
          this.empty = true
        }
      }), catchError(error => {
        console.log(error)
        return error
      })
    )
  }

  analisar(id: any) {
    this.router.navigate(["analisar/candidatura", id]).then(
      n => {
        console.log(n)
      },
      error => {
        console.error(error)
      }
    )
  }
}



