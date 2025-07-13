import { Component } from "@angular/core";
import { EmpleadoComponent } from "../empleado/empleado.component";
// Component es el decorator
@Component({
    selector: 'app-empleados',
    standalone: true,
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.css"],
    imports: [EmpleadoComponent]
})

export class EmpleadosComponent{


}