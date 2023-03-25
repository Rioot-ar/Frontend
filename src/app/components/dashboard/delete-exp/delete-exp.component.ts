import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/models/experiencia';
@Component({
  selector: 'app-delete-exp',
  templateUrl: './delete-exp.component.html',
  styleUrls: ['./delete-exp.component.css']
})
export class DeleteExpComponent {
  @Input() exp!:Experiencia;
  @Output() onDeleteExp: EventEmitter<Experiencia> = new EventEmitter();
  faTimes = faTimes;
  

  onDelete(){
    this.onDeleteExp.emit(this.exp);
  }
}
