import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { proyecto } from '../../proyectos';

@Component({
  selector: 'app-delete-proyecto',
  templateUrl: './delete-proyecto.component.html',
  styleUrls: ['./delete-proyecto.component.css']
})
export class DeleteProyectoComponent {
  @Input() proyecto!:proyecto;
  @Output() onDeleteProyecto: EventEmitter<proyecto> = new EventEmitter();
  faTimes = faTimes;
  

  onDelete(){
    this.onDeleteProyecto.emit(this.proyecto);

  }
}
