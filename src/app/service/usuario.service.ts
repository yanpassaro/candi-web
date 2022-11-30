import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Response} from "../interface/response";
import {Usuario} from '../interface/usuario';
import {Router} from "@angular/router";
import {Candidatura} from "../interface/candidatura";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.API
  token
  header

  constructor(private http: HttpClient, private router : Router) {
    if (localStorage.length == 0) {
      router.navigate([""])
    }
    this.token = localStorage.getItem('token')
    this.header = new HttpHeaders({'token': this.token!})
  }

  get() {
    return this.http.get<Response<Usuario>>(`http://localhost:8080/api/usuario/visualizar`, {'headers': this.header})
  }

  getCandidaturas(page: number) {
    return this.http.get<Response<Candidatura[]>>(`http://localhost:8080/api/candidatura/visualizar/candidato?page=` + page, {'headers': this.header})
  }

  register(usuario: any) {
    return this.http.post<Response<Usuario>>(`http://localhost:8080/api/usuario/cadastrar`, usuario)
  }

  update(usuario: any) {
    return this.http.put<Response<Usuario>>(`http://localhost:8080/api/usuario/atualizar`, usuario, {'headers': this.header})
  }

  delete() {
    return this.http.delete<Response<Usuario>>(`http://localhost:8080/api/usuario/deletar/`, {'headers': this.header})
  }
}
