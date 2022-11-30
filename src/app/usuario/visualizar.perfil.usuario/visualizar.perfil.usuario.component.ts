import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../interface/usuario";
import {UsuarioService} from "../../service/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-visualizar.perfil.usuario',
  templateUrl: './visualizar.perfil.usuario.component.html',
  styleUrls: ['./visualizar.perfil.usuario.component.css']
})
export class VisualizarPerfilUsuarioComponent implements OnInit {
  usuario!: Usuario;
  ok: boolean = false;

  usuarioForm = new FormGroup({
    id: new FormControl(this.usuario.id),
    nome: new FormControl(this.usuario.nome, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    sobrenome: new FormControl(this.usuario.sobrenome, [Validators.max(30)]),
    senha: new FormControl(this.usuario.senha, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    sobre: new FormControl(this.usuario.sobre, [Validators.maxLength(500)]),
    endereco: new FormGroup({
      id: new FormControl(this.usuario.endereco?.id),
      cep: new FormControl(this.usuario.endereco?.cep, [Validators.minLength(8), Validators.maxLength(8)]),
      cidade: new FormControl(this.usuario.endereco?.cidade, [Validators.minLength(8), Validators.maxLength(8)]),
      estado: new FormControl(this.usuario.endereco?.estado, [Validators.minLength(8), Validators.maxLength(8)]),
    }),
    contato: new FormGroup({
      id: new FormControl(this.usuario.contato?.id),
      email: new FormControl(this.usuario.contato?.email, [Validators.email, Validators.minLength(8), Validators.maxLength(30)]),
      telefone: new FormControl(this.usuario.contato?.telefone, [Validators.minLength(8), Validators.maxLength(8)]),
      site: new FormControl(this.usuario.contato?.site, [Validators.minLength(8), Validators.maxLength(30)]),
      portfolio: new FormControl(this.usuario.contato?.portfolio, [Validators.minLength(8), Validators.maxLength(30)]),
    })
  })

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
    this.usuarioService.get().subscribe(
      user => this.usuario = user.data!
      , err =>
        this.router.navigate(["login"])
    )
  }

  onSubmit() {
    this.usuarioService.update(this.usuarioForm.value).subscribe(
      user => this.router.navigate(["perfil/candidato"])
      , err =>
        this.router.navigate(["login"])
    )
  }
}
