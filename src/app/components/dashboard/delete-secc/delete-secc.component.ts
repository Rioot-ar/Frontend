import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/models/experiencia';
@Component({
  selector: 'app-delete-secc',
  templateUrl: './delete-secc.component.html',
  styleUrls: ['./delete-secc.component.css']
})
export class DeleteSeccComponent {
  @Input() exp!:Experiencia;
  @Output() onDeleteExp: EventEmitter<Experiencia> = new EventEmitter();
  faTimes = faTimes;
  

  onDelete(){
    this.onDeleteExp.emit(this.exp);
  }
}
