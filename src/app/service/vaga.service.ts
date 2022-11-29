import { Injectable } from '@angular/core';
import {Response} from "../interface/response";
import {Usuario} from "../interface/usuario";
import {catchError, of, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Vaga} from "../interface/vaga";

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private url: string = environment.API

  constructor(private http: HttpClient) { }

  register(vaga: any) {
    return this.http.post<Response<Vaga>>(`http://localhost:8080/api/cadastrar`, vaga).pipe(
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

  getAll(page: number) {
    return this.http.get<Response<Vaga[]>>(`http://localhost:8080/api/vaga/visualizar?page=` + page)
  }

  detalhar(id: any) {
    return this.http.get<Response<Vaga>>(`http://localhost:8080/api/vaga/detalhar?id=` + id )!
  }

  deletarVaga() {
    return this.http.delete<Response<Vaga>>(`http://localhost:8080/api/deletar/` + localStorage.getItem('token'))
  }


}
