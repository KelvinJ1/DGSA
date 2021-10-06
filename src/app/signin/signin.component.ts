import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/Auth';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {

    if (this.authService.loggedIn()) {
      this.router.navigate(["/home"])
      
    }


  }

 


 
  signin(userLogged: NgForm) {
    this.authService.signin(userLogged.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home'])
      },
      (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    );
  }
}
