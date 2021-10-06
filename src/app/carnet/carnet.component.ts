import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import jwt_decode from 'jwt-decode';
import { Router} from "@angular/router";

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  prueba=false;

  constructor(private router:Router) { }

  ngOnInit( ): void {

  }

  decodeToken(){

    const token=localStorage.getItem('token');
    const decoded:any = jwt_decode(token!);
    return decoded

  }

 arreglo:{names, lastnames,categoria,identificacion, NumDocumento}=this.decodeToken()

 value="NOMBRES: \n"+this.arreglo.names+"\n\n"+"APELLIDOS: \n"+this.arreglo.lastnames+"\n\n"+"TIPO DE DOCUMENTO: \n"+this.arreglo.identificacion+
 "\n\n"+"NUMERO DE DOCUMENTO: \n"+this.arreglo.NumDocumento+"\n\n"+"CATEGORIA: \n"+this.arreglo.categoria

  PDF(){
    
    window.print()
  
  }

}
