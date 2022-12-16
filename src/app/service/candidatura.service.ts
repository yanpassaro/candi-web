import {Injectable} from '@angular/core';
import {Response} from "../interface/response";
import {Usuario} from "../interface/usuario";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {Candidatura} from "../interface/candidatura";

@Injectable({
  providedIn: 'root'
})
export class CandidaturaService {
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

  register(candidatura: any) {
    return this.http.post<Response<Candidatura>>(`http://localhost:8080/api/candidatura/cadastrar`, candidatura, {'headers': this.header})
  }

  visualizarVagas(id: any) {
    return this.http.get<Response<Candidatura[]>>(`http://localhost:8080/api/candidatura/visualizar?page=0&id=` + id, {'headers': this.header})
  }

  deletarCandidatura(id: any) {
    return this.http.delete<Response<Usuario>>(`http://localhost:8080/api/candidatura/deletar?id=`+id,{'headers': this.header})
  }

  detalhar(id: any) {
    return this.http.get<Response<Candidatura>>(`http://localhost:8080/api/candidatura/detalhar?id=` + id , {'headers': this.header})
  }

  analisar(body: any, id: any){
    return this.http.post<Response<Candidatura>>('http://localhost:8080/api/empresa/analisar?vaga=' + id, body,{'headers': this.header})
  }

}
