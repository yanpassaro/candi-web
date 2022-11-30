import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "../interface/response";
import {TokenRedis} from "../interface/tokenredis";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/api/'

  constructor(private http: HttpClient) { }

  login(login: any, tipo: any){
    return this.http.post<Response<TokenRedis>>(this.url + tipo + '/login', login)
  }

}
