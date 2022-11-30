import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../../service/login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
   email: new FormControl('', [Validators.email, Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    senha: new FormControl('' ,[Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    tipo: new FormControl(null,[Validators.required])
  })
  mensagem?: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {}

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.loginForm.get('senha') as FormControl;
  }

  get tipo(): FormControl {
    return this.loginForm.get('tipo') as FormControl
  }

  submit() {
    console.log(this.loginForm.get('tipo')?.value)
    if (this.loginForm.invalid){
      return;
    }
    this.loginService.login(this.loginForm.value, this.loginForm.get('tipo')?.value).subscribe(
      r => {
        localStorage.setItem('token',r.data?.token!)
        localStorage.setItem('role',r.data?.role!)
        this.router.navigate([""])
      },
      error => {
        if(error.error.statusCode == 400){
          this.mensagem = error.error.message
        }
        if(error.error.statusCode == 500){
          this.mensagem = 'Não encontrado'
        }


      }
    );

  }
}
