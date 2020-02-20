import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//conexion a API
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//navbar
import { NavbarComponent } from './navbar/navbar.component';
//main page (login)
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    SignupComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
