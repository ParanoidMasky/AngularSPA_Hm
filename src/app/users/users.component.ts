import { Component, OnInit } from '@angular/core';

import { UsersService } from '../shared/services/users.service';
import { User } from '../shared/models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  _user: User;
  _selectedUser: User; //mandar 
  isPressed : boolean = false;

  constructor(
    private _userService: UsersService
  ) { }

  ngOnInit(){
    this.listUsers();  
  }


  listUsers(){
    let response: Observable<any>;
    response = this._userService.GetUsers();
    response.subscribe(res => {
      console.log(res);
      this._user = res.data;
    })
    
  }

}
