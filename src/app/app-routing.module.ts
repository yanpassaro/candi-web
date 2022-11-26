import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/template/home/home.component";
import {CadastroComponent} from "./component/pages/usuario/cadastro/cadastro.component";
import {LoginComponent} from "./component/pages/usuario/login/login.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "cadastro", component: CadastroComponent
  },
  {
    path: "login", component: LoginComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
