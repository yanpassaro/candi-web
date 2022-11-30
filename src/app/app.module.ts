import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavComponent} from './component/template/nav/nav.component';
import {FooterComponent} from './component/template/footer/footer.component';
import {HomeComponent} from './component/template/home/home.component';
import {LoginComponent} from './component/pages/usuario/login/login.component';
import {RouterModule} from '@angular/router';
import {UsuarioService} from "./service/usuario.service";
import {HttpClientModule} from '@angular/common/http';
import {ViewComponent} from './component/empresa/view/view.component';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CadastrarComponent} from "./usuario/usuario/cadastrar/cadastrar.component";
import {CadastrarVagaComponent} from './component/pages/vaga/cadastrar-vaga/cadastrar.vaga.component';
import {CadastarCandidaturasComponent} from './candidatura/cadastrar/cadastrar.candidatura.component';
import {VisualizarVagaComponent} from './vaga/visualizar.vaga/visualizar.vaga.component';
import {CadastrarEmpresaComponent} from './empresa/cadastrar-empresa/cadastrar-empresa.component';
import {VisualizarPerfilUsuarioComponent} from './usuario/visualizar.perfil.usuario/visualizar.perfil.usuario.component';
import { VisualizarPerfilEmpresaComponent } from './empresa/visualizar.perfil.empresa/visualizar.perfil.empresa.component';
import { VisualizarCandidaturasUsuarioComponent } from './usuario/visualizar.candidaturas.usuario/visualizar.candidaturas.usuario.component';
import { VisualizarVagasEmpresaComponent } from './empresa/visualizar.vagas.empresa/visualizar.vagas.empresa.component';
import { VisualizarCandidaturasEmpresaComponent } from './empresa/visualizar.candidaturas.empresa/visualizar.candidaturas.empresa.component';
import { AnalisarCandidaturaEmpresaComponent } from './empresa/analisar.candidatura.empresa/analisar.candidatura.empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ViewComponent,
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

