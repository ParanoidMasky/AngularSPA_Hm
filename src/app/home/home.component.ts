import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from '../shared/models/Login';
import { LoginService } from '../shared/services/login.service';
import { TokenService } from '../shared/services/token.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _tokenService: TokenService,
    private _router: Router
  ) {}

  //funcion para iniciar y validar
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(2)]]
    });
  }

  //funcion para enviar datos, obtener token y hacer call a la API para ir a otra pestaña de la app
  onSubmit(){
    console.log(this.loginForm);
    console.log(this.loginForm.controls.email);
    console.log(this.loginForm.controls.pasword);
    if(this.loginForm.valid){
      //call
      const loginObject: Login = {
        email: this.loginForm.get("email").value,
        password: this.loginForm.get("password").value
      };

      this._loginService.login(loginObject).subscribe(response => {
        console.log(response);
        //dar token
        this._tokenService.setActiveToken(response.token);
        //ir a la ruta editUsers (/Users)
        this._router.navigateByUrl("users");
      });

    }else{
      console.log("error al procesar");
    }
  }

}
