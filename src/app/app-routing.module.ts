import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/template/home/home.component";
import {ViewComponent} from "./component/empresa/view/view.component";
import {CadastrarComponent} from "./usuario/usuario/cadastrar/cadastrar.component";
import {CadastrarVagaComponent} from "./component/pages/vaga/cadastrar-vaga/cadastrar.vaga.component";
import {VisualizarVagaComponent} from "./vaga/visualizar.vaga/visualizar.vaga.component";
import {CadastarCandidaturasComponent} from "./candidatura/cadastrar/cadastrar.candidatura.component";
import {LoginComponent} from "./component/pages/usuario/login/login.component";
import {CadastrarEmpresaComponent} from "./empresa/cadastrar-empresa/cadastrar-empresa.component";
import {
  VisualizarPerfilUsuarioComponent
} from "./usuario/visualizar.perfil.usuario/visualizar.perfil.usuario.component";
import {
  VisualizarCandidaturasUsuarioComponent
} from "./usuario/visualizar.candidaturas.usuario/visualizar.candidaturas.usuario.component";
import {
  VisualizarPerfilEmpresaComponent
} from "./empresa/visualizar.perfil.empresa/visualizar.perfil.empresa.component";
import {VisualizarVagasEmpresaComponent} from "./empresa/visualizar.vagas.empresa/visualizar.vagas.empresa.component";
import {
  VisualizarCandidaturasEmpresaComponent
} from "./empresa/visualizar.candidaturas.empresa/visualizar.candidaturas.empresa.component";
import {
  AnalisarCandidaturaEmpresaComponent
} from "./empresa/analisar.candidatura.empresa/analisar.candidatura.empresa.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
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
    path: "visualizar/empresas", component: ViewComponent
  },
  {
    path: "cadastrar/empresa", component: CadastrarEmpresaComponent
  },
  {
    path: "cadastrar/vaga", component: CadastrarVagaComponent
  },
  {
    path: "visualizar/vaga", component: VisualizarVagaComponent
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
  {
    path: "analisar/candidatura/:id", component: AnalisarCandidaturaEmpresaComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
