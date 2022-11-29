import { Injectable } from '@angular/core';
import {Response} from "../interface/response";
import {Usuario} from "../interface/usuario";
import {catchError, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Vaga} from "../interface/vaga";

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {
  private url: string = environment.API

  constructor(private http: HttpClient) { }

  register(candidatura: any) {
    return this.http.post<Response<Usuario>>(`http://localhost:8080/api/candidatura/cadastrar`, candidatura).pipe(
      tap(resp => {
        return resp.message
      }),
      catchError(err => {
        if (err.status == 500) {
          throw err.error.message
        }
        if (err.status == 400) {
          throw err.error.mensagem
        }
        return of([])
      })
    )
  }
  get() {
    return this.http.get<Response<Usuario>>(`http://localhost:8080/api/candidatura/visualizar`).pipe(
      tap(resp => {
        return resp.data
      }),
      catchError(err => err.error.message)
    )
  }


  deletarCandidatura() {
    return this.http.delete<Response<Usuario>>(`http://localhost:8080/api/candidatura/deletar/` + localStorage.getItem('token'))
  }

  detalhar(id: any) {
    return this.http.get<Response<Usuario>>(`http://localhost:8080/api/candidatura/detalhar?id=` + id )
  }
}
