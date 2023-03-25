import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Red } from 'src/app/models/red';

@Component({
  selector: 'app-delete-red',
  templateUrl: './delete-red.component.html',
  styleUrls: ['./delete-red.component.css']
})
export class DeleteRedComponent {
  @Input() red!:Red;
  @Output() onDeleteRed: EventEmitter<Red> = new EventEmitter();
  faTimes = faTimes;
  

  onDelete(){
    this.onDeleteRed.emit(this.red);
  }
}
