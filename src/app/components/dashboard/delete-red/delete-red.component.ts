import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { redes } from '../../redes';

@Component({
  selector: 'app-delete-red',
  templateUrl: './delete-red.component.html',
  styleUrls: ['./delete-red.component.css']
})
export class DeleteRedComponent {
  @Input() red!:redes;
  @Output() onDeleteRed: EventEmitter<redes> = new EventEmitter();
  faTimes = faTimes;
  

  onDelete(){
    this.onDeleteRed.emit(this.red);
  }
}
