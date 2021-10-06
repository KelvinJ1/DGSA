import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnetComponent } from './carnet/carnet.component';
import { MainLayaoutComponent } from "./layout/main-layaout/main-layaout.component";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component:MainLayaoutComponent},
  {path: 'signup', component:SignupComponent },
  {path: 'signin', component:SigninComponent },
  {path: 'home', component:CarnetComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
