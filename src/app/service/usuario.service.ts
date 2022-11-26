import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Response} from "../interface/response";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.API

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get<Response>(`http://localhost:8080/`)
  }

  register(usuario: any) {
    return this.http.post<Response>(`api/candidato/cadastrar`, usuario)
  }

  update(usuario: any) {
    return this.http.put(this.url + `/candidato/atualizar` + localStorage.getItem('token'), usuario)
  }

  delete() {
    return this.http.delete(this.url + `/candidato/deletar/` + localStorage.getItem('token'))
  }
}
