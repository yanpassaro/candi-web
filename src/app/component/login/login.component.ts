import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {catchError, tap} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl(null, [
      Validators.email,
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
    senha: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ])
  })
  mensagem?: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {}

  get email(): FormControl {
    return this.login.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.login.get('senha') as FormControl;
  }

  efetuar() {
    if (this.login.valid) {
      this.loginService.login(this.login.value).pipe(
        tap(r => {
          localStorage.setItem('token', r.data!.token)
          this.router.navigate([""]).then(
            n => {
              console.log(n)
            },
            error => {
              console.error(error)
            }
          )
        }),
        catchError(error => {
            this.mensagem = error.error.message
            return error
          }
        )
      ).subscribe()
    }
  }
}
