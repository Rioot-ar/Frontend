import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-delete-edu',
  templateUrl: './delete-edu.component.html',
  styleUrls: ['./delete-edu.component.css']
})
export class DeleteEduComponent {
  @Input() edu!:Educacion;
  @Output() onDeleteEdu: EventEmitter<Educacion> = new EventEmitter();
  faTimes = faTimes;
  

  onDelete(){
    this.onDeleteEdu.emit(this.edu);
  }
}
