import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/Auth';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
  
})
export class AuthService {

  selectedAuth: Auth
  auth:Auth[] = []
  readonly URL_API = "http://localhost:5000"

  constructor(private http: HttpClient, private router: Router) {
    this.selectedAuth = new Auth()
  }

  //Signup
  signup(userCreated:Auth){
    console.log(`${this.URL_API}/auth/signup`)
    return this.http.post(`${this.URL_API}/auth/signup`, userCreated)
  }


  signin(userLogged:Auth){
    console.log(`${this.URL_API}/auth/signin`)
    return this.http.post<any>(`${this.URL_API}/auth/signin`, userLogged)
  }


  loggedIn(){
    //return !!localStorage.getItem('token')
    if(localStorage.getItem('token')){
      return localStorage.getItem('token')
    } else {
      return false
    }
  }


  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
