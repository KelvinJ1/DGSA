import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-main-layaout',
  templateUrl: './main-layaout.component.html',
  styleUrls: ['./main-layaout.component.css']
})
export class MainLayaoutComponent implements OnInit {

  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit(): void {


    if (this.authService.loggedIn()) {
      this.router.navigate(["/home"])
      
    }

  }

}
