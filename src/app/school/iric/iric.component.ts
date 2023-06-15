import { Component } from '@angular/core';
import { IAlumns } from 'src/app/escuela/alumnsir';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';

  //alumnos : any[] = []
  alumnosIric : IAlumns[] = [
    {
      "matricula": 1234,
      "nombre": "Barry Rodriquez",
      "edad": 20,
      "correo": "barry.rodriquez@example.com",
      "pago": 129.42,
      "foto": "https://randomuser.me/api/portraits/men/42.jpg"
    },
    {
      "matricula": 5678,
      "nombre": "Vicki Cook",
      "edad": 21,
      "correo": "vicki.cook@example.com",
      "pago": 129.42,
      "foto": "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
      "matricula": 9012,
      "nombre": "Randall Perry",
      "edad": 22,
      "correo": "randall.perry@example.com",
      "pago": 129.42,
      "foto": "https://randomuser.me/api/portraits/men/12.jpg"
    },
  ]

  showImage(): void {
    this.muestraImg =! this.muestraImg;
  }
}
