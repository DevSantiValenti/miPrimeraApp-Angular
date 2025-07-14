import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  nombre= "juan";
  apellido= "perez";
  edad= 15;
  // empresa= "Tech Solutions";

  // llamarEmpresa(value: string){

  // }

}
