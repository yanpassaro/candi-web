import {Component, OnInit} from '@angular/core';
import {Vaga} from "../../interface/vaga";
import {VagaService} from "../../service/vaga.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visualizar.vagas.empresa',
  templateUrl: './visualizar.vagas.empresa.component.html',
  styleUrls: ['./visualizar.vagas.empresa.component.css']
})
export class VisualizarVagasEmpresaComponent implements OnInit {
  vagas!: Vaga[];
  empty!: boolean;

  constructor(private vagaService: VagaService, private router: Router) {
  }

  ngOnInit(): void {
    this.vagaService.getByEmpresa().subscribe(
      r => {
        this.vagas = r.datas!
        if (r.datas?.length! == 0) {
          this.empty = true;
        }
      },
      error => {
        this.router.navigate([""])
      }
    )
  }

  candidaturas(id: any) {
    this.router.navigate(["visualizar/candidaturas", id])
  }
}
