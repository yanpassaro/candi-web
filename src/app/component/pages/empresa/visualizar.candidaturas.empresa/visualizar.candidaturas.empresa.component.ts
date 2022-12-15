import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CandidaturaService} from "../../../../service/candidatura.service";
import {Candidatura} from "../../../../interface/candidatura";

@Component({
  selector: 'app-visualizar.candidaturas.empresa',
  templateUrl: './visualizar.candidaturas.empresa.component.html',
  styleUrls: ['./visualizar.candidaturas.empresa.component.css']
})
export class VisualizarCandidaturasEmpresaComponent implements OnInit {
  id: any
  candidaturas!: Candidatura[]
  empty = false;

  constructor(private active: ActivatedRoute, private router: Router, private candidaturaService: CandidaturaService) {
  }

  ngOnInit(): void {
    this.active.params.subscribe(
      r => this.id = r?.['id']
    )
      this.candidaturaService.getAllByVaga(this.id).subscribe(
        r => {
          this.candidaturas = r.datas!
          if (r.datas?.length! < 1) {
            this.empty = true;
          }
        },
        error => {
          this.router.navigate(["visualizar/vagas"])
        }
      )
  }

  analisar(id: any) {
    this.router.navigate(["analisar/candidatura", id])
  }
}
