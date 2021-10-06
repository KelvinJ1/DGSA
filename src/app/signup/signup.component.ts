import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import Swal from 'sweetalert2';
import { Auth } from 'src/app/models/Auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

rad="";



  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    if (this.authService.loggedIn()) {
      this.router.navigate(["/home"])
      
    }
  }


  invalid(){

    Swal.fire(
      'Error',
      'Formulario inválido.',
      'error'
    )
  }
  
  clean(form?: NgForm){
    if(form) {
      form.reset()
      this.authService.selectedAuth = new Auth()
    }
  }

  signup(userCreated: NgForm){
    if (userCreated.invalid) {
      return this.invalid(); 
    }
    this.authService.signup(userCreated.value).subscribe(
      (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro exitoso!',
          showConfirmButton: false,
          timer: 1000
        })
        this.clean(userCreated)
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El usuario ya existe',
          showConfirmButton: false,
          timer: 1000
        })
      }
    )
  }

  

}











