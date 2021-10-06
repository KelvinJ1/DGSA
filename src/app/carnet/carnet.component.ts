import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  PDF(){
    const options={
      filename:'DIGSA_ID',
      image:{type: 'jpeg'},
      html2canvas:{},
      jsPDF:{orientation: 'landscape'},
      format:[900, 1700 ]
    };
    const content = document.getElementById("carnet"); 
    html2pdf()
    .from(content)
    .set(options)
    .save();
  
  }

}
