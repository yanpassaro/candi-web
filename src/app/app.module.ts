import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavComponent } from './component/template/nav/nav.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule } from '@angular/router';
import { UsuarioService } from "./service/usuario.service";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarComponent } from "./component/pages/usuario/cadastrar/cadastrar.component";
import { CadastarCandidaturasComponent } from './component/pages/usuario/cadastrar.candidatura/cadastrar.candidatura.component';
import { VisualizarPerfilUsuarioComponent } from './component/pages/usuario/visualizar.perfil.usuario/visualizar.perfil.usuario.component';
import { VisualizarPerfilEmpresaComponent } from './component/pages/empresa/visualizar.perfil.empresa/visualizar.perfil.empresa.component';
import { VisualizarCandidaturasUsuarioComponent } from './component/pages/usuario/visualizar.candidaturas.usuario/visualizar.candidaturas.usuario.component';
import { VisualizarVagasEmpresaComponent } from './component/pages/empresa/visualizar.vagas.empresa/visualizar.vagas.empresa.component';
import { VisualizarCandidaturasEmpresaComponent } from './component/pages/empresa/visualizar.candidaturas.empresa/visualizar.candidaturas.empresa.component';
import { AnaliseComponent } from './component/pages/empresa/analise/analise.component';
import { CadastrarEmpresaComponent } from "./component/pages/empresa/cadastrar.empresa/cadastrar.empresa.component";
import {CadastrarVagaComponent} from "./component/pages/empresa/cadastrar.vaga/cadastrar.vaga.component";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    CadastrarComponent,
    CadastrarEmpresaComponent,
    CadastrarVagaComponent,
    CadastarCandidaturasComponent,
    VisualizarPerfilUsuarioComponent,
    VisualizarPerfilEmpresaComponent,
    AnaliseComponent,
    VisualizarCandidaturasUsuarioComponent,
    VisualizarVagasEmpresaComponent,
    VisualizarCandidaturasEmpresaComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

