import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  admin=false;
  constructor(public authService: AuthService, private router:Router) { 
    
  }

  ngOnInit(): void {
    
  
  }


 

  alert(){

    Swal.fire({
      title: 'Política de tratamientos de datos',
      text: "En cumplimiento a lo dispuesto en el decreto 1377 de 2013, reglamentario de la Ley Estatutaria 1581 de 2012 y demás normas concordantes, mediante las cuales se dictan disposiciones generales para la protección de datos personales, La Dirección General De Sanidad Militar como tratante de los datos obtenidos durante la ejecución de su objeto misional y a través de los diferentes canales de recolección, solicita de su autorización para realizar el tratamiento de sus datos personales, los cuales serán incorporados en nuestra base de datos, La información y datos personales suministrados a La Dirección General De Sanidad Militar, podrán ser recolectados, procesados, almacenados, usados, circulados, suprimidos, compartidos, actualizados y/o trasmitidos, de acuerdo con los términos y condiciones de las políticas de seguridad informática establecidas mediante resolución 9025 de 2012, los datos personales obtenidos serán usados en forma exclusiva para el cumplimiento de nuestra misión institucional y la debida prestación de servicios de salud de este Subsistema.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Rechazar'
    }).then((result) => {
  
      if (!result.isConfirmed) {
  
      this.router.navigate(["/"])
  }
    })}

}
