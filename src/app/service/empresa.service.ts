import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Response} from "../interface/response";
import {catchError, tap} from "rxjs";
import {Empresas} from "../interface/empresas";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

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

  getAllEmpresa() {
    return this.http.get<Response<any[]>>(` http://localhost:8080/api/empresa/visualizar?page=0`)
  }

  get() {
    return this.http.get<Response<Empresas>>(`http://localhost:8080/api/empresa/detalhar`, {'headers': this.header})
  }

  register(empresa: any) {
    return this.http.post<Response<Empresas>>(`http://localhost:8080/api/empresa/cadastrar`, empresa)
  }

  deleteEmpresa() {
    return this.http.delete<Response<Empresas>>(`http://localhost:8080/api/empresa/deletar/`, {'headers': this.header})
  }
}
