import {Injectable, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Response} from "../interface/response";
import {Usuario} from "../interface/usuario";
import {catchError, Observable, of, tap} from "rxjs";
import {Empresa} from "../interface/empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url: string = environment.API


  constructor(private http: HttpClient) {
  }

  getAllEmpresa() {
    return this.http.get<Response<any[]>>(` http://localhost:8080/api/empresa/visualizar?page=0`)
  }

  get() {
    return this.http.get<Response<Usuario>>(`http://localhost:8080/api/empresa/visualizar`).pipe(
      tap(resp => {
        return resp.data
      }),
      catchError(err => err.error.message)
    )
  }

  register(empresa: any) {
    return this.http.post<Response<Usuario>>(`http://localhost:8080/api/empresa/cadastrar`, empresa)

  }

  update(empresa: any) {
    return this.http.put<Response<Usuario>>(`http://localhost:8080/api/empresa/atualizar` + localStorage.getItem('token'), empresa)
  }

  deleteEmpresa() {
    return this.http.delete<Response<Usuario>>(`http://localhost:8080/api/empresa/deletar/` + localStorage.getItem('token'))
  }
}
