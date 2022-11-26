import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Response} from "../interface/response";
import { Usuario } from '../interface/usuario';
import { catchError, empty, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = environment.API

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get<Response<Usuario>>(`http://localhost:8080/`).pipe(
      map( (response) => response.dados?.values),
      catchError( error => { 
        console.error(error)
        return of([])
      })
    )
  }

  register(usuario: any) {
    return this.http.post<Response<any>>(`api/candidato/cadastrar`, usuario)
  }

  update(usuario: any) {
    return this.http.put(this.url + `/candidato/atualizar` + localStorage.getItem('token'), usuario)
  }

  delete() {
    return this.http.delete(this.url + `/candidato/deletar/` + localStorage.getItem('token'))
  }
}
