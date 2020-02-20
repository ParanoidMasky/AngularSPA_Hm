import { Component, OnInit } from '@angular/core';

import { SignupService } from '../shared/services/signup.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { newUser } from '../shared/models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginForm : FormGroup;
  isFull : boolean = false;
  _newUser : newUser;
  
  constructor(
    private _signupService : SignupService, //manda un objeto con los datos
    private _formBuilder : FormBuilder //contruye todo el formulario en un objeto

  ) { }

  ngOnInit() : void {
    this._newUser = new newUser();

    this.loginForm = this._formBuilder.group({
      name: ["", [Validators.required]],
      job: ["", [Validators.required]],
  
    });
  }

  sendUser(){
    //llamado a leer form
    console.log(this.loginForm);
    if(this.loginForm.valid){
      this.isFull = true;
      console.log(this.isFull);

      const signupObject : newUser = {
        name: this.loginForm.get("name").value,
        job: this.loginForm.get("job").value,
      };

    //llamado a posteo
    this._signupService.SignUp(signupObject).subscribe(response => {
      //agregar modal con info de registro;
      response = this._signupService.SignUp(signupObject);
      response.subscribe(res => {
        console.log(res);
        this._newUser = res;
      })

    });

    }else{
      console.log("mete algun dato");
      this.isFull = false;
      console.log(this.isFull);
    }

  }
}
