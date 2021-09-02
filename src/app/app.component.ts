import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  edadUno=0;
  edadDos=0;
  promedio=0;

  calcularPromedio(){
    this.promedio = (this.edadUno+this.edadDos)/2;
    console.log(this.promedio);
  }

  limpiarCuadros(){
    this.edadUno=0;
    this.edadDos=0;
    this.promedio=0;
  }
}
