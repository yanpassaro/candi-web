import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isAuth(): boolean{
    return localStorage.getItem('token') != null;
  }

  isUser(): boolean{
    return localStorage.getItem('role') == 'Usuário';
  }

  isAdmin(): boolean{
    return localStorage.getItem('role') == 'Administrador';
  }

  logout() {
    localStorage.clear();
  }

  get verAuth(){
    return localStorage.getItem('role')
  }



}
