import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-delete-proyecto',
  templateUrl: './delete-proyecto.component.html',
  styleUrls: ['./delete-proyecto.component.css']
})
export class DeleteProyectoComponent {
  @Input() proyecto!:Proyecto;
  @Output() onDeleteProyecto: EventEmitter<Proyecto> = new EventEmitter();
  faTimes = faTimes;
  

  onDelete(){
    this.onDeleteProyecto.emit(this.proyecto);

  }
}
