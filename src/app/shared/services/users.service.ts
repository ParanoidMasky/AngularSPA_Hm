import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../classes/Constant';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient
  ) { }

  public GetUsers() : Observable<any>{
    return this._http.get(Constant.API + '/users?page=2');
  }

  public getID(id: number): Observable<any>{
    return this._http.get(Constant.API + '/users/' + id);
  }
}
