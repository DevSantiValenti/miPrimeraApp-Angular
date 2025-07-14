import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
// Cada vez que cree un "componente" nuevo y lo use, en el component,ts debo poner true el standalone del decorator, y agregarlo al import aqui
// Component es el decorator
@Component({
  selector: 'app-raiz',
  standalone: true,
  imports: [EmpleadosComponent, EmpleadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 
export class AppComponent {
  title = 'miPrimeraApp';
  saludo = "Hola gente de angular";
}