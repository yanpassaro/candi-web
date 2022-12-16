import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {EmpresaService} from "../../../../service/empresa.service";
import {Empresas} from "../../../../interface/empresas";

@Component({
  selector: 'app-visualizar.perfil.empresa',
  templateUrl: './visualizar.perfil.empresa.component.html',
  styleUrls: ['./visualizar.perfil.empresa.component.css']
})
export class VisualizarPerfilEmpresaComponent implements OnInit {
  empresas!: Empresas;
  ok: boolean = false;

  constructor(private router: Router, private empresaService: EmpresaService) {
  }

  ngOnInit(): void {
    this.empresaService.perfil().subscribe(
      r => {
        this.empresas = r.data!
      }, error => {
        console.log(error.error.message)
        this.router.navigate(["login"])
      }
    )
  }

  voltar() {
    this.router.navigate([""])
  }

  deletar() {
    this.empresaService.deletar().subscribe(
      user => this.router.navigate(["perfil/empresa"])
    )
  }

  visualizarVagas() {
    this.router.navigate(["empresa/vagas"])
  }
}
