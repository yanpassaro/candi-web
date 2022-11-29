import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { UsuarioService } from "../../../../service/usuario.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
   email: new FormControl('', [Validators.email, Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    senha: new FormControl('' ,[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    tipo: new FormControl('',[Validators.required])
  })
  mensagem?: string;

  constructor() { }

  ngOnInit(): void { }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.loginForm.get('senha') as FormControl;
  }

  get tipo(): FormControl {
    return this.loginForm.get('tipo') as FormControl
  }






}
