import { Injectable } from '@angular/core';
import {Response} from "../interface/response";
import {Usuario} from "../interface/usuario";
import {catchError, of, tap} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Vaga} from "../interface/vaga";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private url: string = environment.API
  token
  header

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.length == 0) {
      router.navigate([""])
    }
    this.token = localStorage.getItem('token')
    this.header = new HttpHeaders({'token': this.token!})
  }

  register(vaga: any) {
    return this.http.post<Response<Vaga>>(`http://localhost:8080/api/vaga/cadastrar`, vaga, {'headers': this.header})
  }

  getByEmpresa(){
    return this.http.get<Response<Vaga[]>>("http://localhost:8080/api/vaga/visualizar/empresa?page=0", {'headers': this.header})
  }

  getAll(page: number) {
    return this.http.get<Response<Vaga[]>>(`http://localhost:8080/api/vaga/visualizar?page=` + page)
  }

  detalhar(id: string) {
    return this.http.get<Response<Vaga>>("http://localhost:8080/api/vaga/detalhar?id=" + id)
  }

  deletar(id: any) {
    return this.http.delete<Response<Vaga>>(`http://localhost:8080/api/deletar?id=`+ id, {'headers': this.header})
  }


}
