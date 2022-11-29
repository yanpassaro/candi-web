import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Response} from "../interface/response";
import {Usuario} from '../interface/usuario';
import {catchError, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.API

  constructor(private http: HttpClient) {
  }

  getHome() {
    return this.http.get<Response<Usuario>>(this.url).pipe(
      tap(resp => {
        return resp.message
      }),
      catchError(err => err.mensagem)
    )
  }

  get() {
    return this.http.get<Response<Usuario>>(`http://localhost:8080/api/candidato/visualizar`).pipe(
      tap(resp => {
        return resp.data
      }),
      catchError(err => err.mensagem)
    )
  }

  register(usuario: any) {
    return this.http.post<Response<Usuario>>(`http://localhost:8080/api/usuario/cadastrar`, usuario)
  }

  update(usuario: any) {
    return this.http.put<Response<Usuario>>(`http://localhost:8080/api/candidato/atualizar` + localStorage.getItem('token'), usuario)
  }

  delete() {
    return this.http.delete<Response<Usuario>>(`http://localhost:8080/api/candidato/deletar/` + localStorage.getItem('token'))
  }
}
