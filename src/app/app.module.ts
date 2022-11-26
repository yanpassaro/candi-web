import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavComponent} from './component/template/nav/nav.component';
import {FooterComponent} from './component/template/footer/footer.component';
import {HomeComponent} from './component/template/home/home.component';
import {CadastroComponent} from './component/pages/usuario/cadastro/cadastro.component';
import {LoginComponent} from './component/pages/usuario/login/login.component';
import {CadastrarComponent} from './component/pages/vaga/cadastrar/cadastrar.component';
import {VisualizarComponent} from './component/pages/vaga/visualizar/visualizar.component';
import {RouterModule} from '@angular/router';
import {UsuarioService} from "./service/usuario.service";
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    CadastrarComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
