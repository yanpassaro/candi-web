import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavComponent} from './component/template/nav/nav.component';
import {FooterComponent} from './component/template/footer/footer.component';
import {LoginComponent} from './component/login/login.component';
import {RouterModule} from '@angular/router';
import {UsuarioService} from "./service/usuario.service";
import {HttpClientModule} from '@angular/common/http';
import {VisualizarEmpresaComponent} from './component/visualizar.empresa/visualizar.empresa.component';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CadastrarComponent} from "./component/pages/usuario/cadastrar/cadastrar.component";
import {CadastrarVagaComponent} from './component/pages/empresa/cadastrar-vaga/cadastrar.vaga.component';
import {CadastarCandidaturasComponent} from './component/pages/usuario/cadastrar.candidatura/cadastrar.candidatura.component';
import {VisualizarVagaComponent} from './component/visualizar.vaga/visualizar.vaga.component';
import {CadastrarEmpresaComponent} from './component/pages/empresa/cadastrar-empresa/cadastrar-empresa.component';
import {VisualizarPerfilUsuarioComponent} from './component/pages/usuario/visualizar.perfil.usuario/visualizar.perfil.usuario.component';
import { VisualizarPerfilEmpresaComponent } from './component/pages/empresa/visualizar.perfil.empresa/visualizar.perfil.empresa.component';
import { VisualizarCandidaturasUsuarioComponent } from './component/pages/usuario/visualizar.candidaturas.usuario/visualizar.candidaturas.usuario.component';
import { VisualizarVagasEmpresaComponent } from './component/pages/empresa/visualizar.vagas.empresa/visualizar.vagas.empresa.component';
import { VisualizarCandidaturasEmpresaComponent } from './component/pages/empresa/visualizar.candidaturas.empresa/visualizar.candidaturas.empresa.component';
import { AnalisarCandidaturaEmpresaComponent } from './component/pages/empresa/analisar.candidatura.empresa/analisar.candidatura.empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    VisualizarEmpresaComponent,
    CadastrarComponent,
    CadastrarVagaComponent,
    CadastarCandidaturasComponent,
    VisualizarVagaComponent,
    CadastrarEmpresaComponent,
    VisualizarPerfilUsuarioComponent,
    VisualizarPerfilEmpresaComponent,
    VisualizarCandidaturasUsuarioComponent,
    VisualizarVagasEmpresaComponent,
    VisualizarCandidaturasEmpresaComponent,
    AnalisarCandidaturaEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgbModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

