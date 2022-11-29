import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "../interface/response";
import {TokenRedis} from "../interface/tokenredis";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.API

  constructor(private http: HttpClient) { }

  login(login: any, tipo: any){
    return this.http.get<Response<TokenRedis>>(this.url + tipo + 'login')
  }

}
