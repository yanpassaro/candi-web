import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastrarComponent} from "./component/pages/usuario/cadastrar/cadastrar.component";
import {CadastarCandidaturasComponent} from "./component/pages/usuario/cadastrar.candidatura/cadastrar.candidatura.component";
import {LoginComponent} from "./component/login/login.component";
import {
  VisualizarPerfilUsuarioComponent
} from "./component/pages/usuario/visualizar.perfil.usuario/visualizar.perfil.usuario.component";
import {
  VisualizarCandidaturasUsuarioComponent
} from "./component/pages/usuario/visualizar.candidaturas.usuario/visualizar.candidaturas.usuario.component";
import {
  VisualizarPerfilEmpresaComponent
} from "./component/pages/empresa/visualizar.perfil.empresa/visualizar.perfil.empresa.component";
import {VisualizarVagasEmpresaComponent} from "./component/pages/empresa/visualizar.vagas.empresa/visualizar.vagas.empresa.component";
import {
  VisualizarCandidaturasEmpresaComponent
} from "./component/pages/empresa/visualizar.candidaturas.empresa/visualizar.candidaturas.empresa.component";
import {CadastrarEmpresaComponent} from "./component/pages/empresa/cadastrar.empresa/cadastrar.empresa.component";
import {CadastrarVagaComponent} from "./component/pages/empresa/cadastrar.vaga/cadastrar.vaga.component";

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "perfil", component: VisualizarPerfilUsuarioComponent
  },
  {
    path: "cadastrar", component: CadastrarComponent
  },
  {
    path: "cadastrar/empresa", component: CadastrarEmpresaComponent
  },
  {
    path: "cadastrar/vaga", component: CadastrarVagaComponent
  },
  {
    path: "candidatar/:id", component: CadastarCandidaturasComponent
  },
  {
    path: "perfil/candidaturas", component: VisualizarCandidaturasUsuarioComponent
  },
  {
    path: "perfil/empresa", component: VisualizarPerfilEmpresaComponent
  },
  {
    path: "empresa/vagas", component: VisualizarVagasEmpresaComponent
  },
  {
    path: "visualizar/candidaturas/:id", component: VisualizarCandidaturasEmpresaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
