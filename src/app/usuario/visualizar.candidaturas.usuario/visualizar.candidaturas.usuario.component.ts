import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../service/usuario.service";
import {Candidatura} from "../../interface/candidatura";
import {CandidaturaService} from "../../service/candidatura.service";

@Component({
  selector: 'app-visualizar.candidaturas.usuario',
  templateUrl: './visualizar.candidaturas.usuario.component.html',
  styleUrls: ['./visualizar.candidaturas.usuario.component.css']
})
export class VisualizarCandidaturasUsuarioComponent implements OnInit {
  candidaturas?: Candidatura[]
  message?: string
  error?: string
  notExist: boolean = false;

  constructor(private usuarioService: UsuarioService, private candidaturaService: CandidaturaService) {
  }

  ngOnInit(): void {
    this.usuarioService.getCandidaturas(0).subscribe(
      r => {
        this.candidaturas = r.data!
      }, error => {
        console.log(error.error.message)
        this.notExist = true;
      }
    )
  }

  deletarCandidatura(id: any) {
    this.candidaturaService.deletarCandidatura(id).subscribe(
      r => {
        this.message = r.message;
      }, error => {
        console.log('error')
      }
    )
  }
}
