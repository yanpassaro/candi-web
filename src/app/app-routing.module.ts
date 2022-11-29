import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/template/home/home.component";
import {ViewComponent} from "./component/empresa/view/view.component";
import {CadastrarComponent} from "./usuario/usuario/cadastrar/cadastrar.component";
import {CadastrarVagaComponent} from "./component/pages/vaga/cadastrar-vaga/cadastrar.vaga.component";
import {VisualizarComponent} from "./component/pages/vaga/visualizar/visualizar.component";
import {VisualizarVagaComponent} from "./vaga/visualizar.vaga/visualizar.vaga.component";
import {CadastarCandidaturasComponent} from "./candidatura/cadastrar/cadastrar.candidatura.component";
import {LoginComponent} from "./component/pages/usuario/login/login.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "cadastrar", component: CadastrarComponent
  },
  {
    path: "empresas", component: ViewComponent
  },
  {
    path: "cadastrar/vaga", component: CadastrarVagaComponent
  },
  {
    path: "visualizar/vaga", component: VisualizarVagaComponent
  },
  {
    path: "candidatar/:id", component: CadastarCandidaturasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
