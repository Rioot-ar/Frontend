import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { item } from '../../item';
@Component({
  selector: 'app-delete-secc',
  templateUrl: './delete-secc.component.html',
  styleUrls: ['./delete-secc.component.css']
})
export class DeleteSeccComponent {
  @Input() item!:item;
  @Input() tipoSeccion!:String;
  @Output() onDeleteItem: EventEmitter<item> = new EventEmitter();
  faTimes = faTimes;
  

  onDelete(){
    this.onDeleteItem.emit(this.item);

  }
}
