import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { newUser } from '../models/User';
import { Constant } from '../classes/Constant';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private _http : HttpClient

  ) { }

  public SignUp (body : newUser) : Observable<any> {
    return this._http.post(Constant.API + '/users', body, Constant.headers)
  }

}
