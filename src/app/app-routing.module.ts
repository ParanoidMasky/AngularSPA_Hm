import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component'
import { SignupComponent } from './signup/signup.component';
import { AuthenticationGuard } from './shared/services/authentication.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path: 'users', canActivate: [AuthenticationGuard] , component: UsersComponent },
  { path: 'signup', canActivate: [AuthenticationGuard], component: SignupComponent },
  { path:'not-found', component: NotFoundComponent },
  { path:'**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
