import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../../../interface/usuario";
import {UsuarioService} from "../../../../service/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visualizar.perfil.usuario',
  templateUrl: './visualizar.perfil.usuario.component.html',
  styleUrls: ['./visualizar.perfil.usuario.component.css']
})
export class VisualizarPerfilUsuarioComponent implements OnInit {
  user?: Usuario;
  ok: boolean = false;

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
    this.usuarioService.get().subscribe(
    user => this.user = user.data!
    , err =>
      this.router.navigate(["login"])
  )}

  deletar() {
    this.usuarioService.delete().subscribe(
      user => this.router.navigate([""])
      ,err =>
        this.router.navigate(["perfil/candidato"])
    )
  }


  candidaturas() {
    this.router.navigate(["perfil/candidaturas"])
  }
}
