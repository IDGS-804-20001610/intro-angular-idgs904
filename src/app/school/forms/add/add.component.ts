import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  num1 = '';
  num2 = '';
  resultado: number = 0;

  add() {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }
}
