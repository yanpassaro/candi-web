import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Response} from "../interface/response";
import {catchError, tap} from "rxjs";
import {Empresas} from "../interface/empresas";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private url: string = environment.API
  token
  header

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.length == 0) {
      router.navigate(["login"]).then(
        n => {
          console.log(n)
        },
        error => {
          console.error(error)
        }
      )
    }
    this.token = localStorage.getItem('token')
    this.header = new HttpHeaders({'token': this.token!})
  }

  perfil() {
    return this.http.get<Response<Empresas>>(`http://localhost:8080/api/empresa/detalhar`, {'headers': this.header})
  }

  cadastrar(empresa: any) {
    return this.http.post<Response<any>>(`http://localhost:8080/api/empresa/cadastrar`, empresa)
  }

  deletar() {
    return this.http.delete<Response<Empresas>>(`http://localhost:8080/api/empresa/deletar/`, {'headers': this.header})
  }
}
