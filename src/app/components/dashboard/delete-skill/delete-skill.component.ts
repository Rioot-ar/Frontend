import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Habilidad } from 'src/app/models/habilidad';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent {
  @Input() skill!:Habilidad;
  @Output() onDeleteSkill:EventEmitter<Habilidad> = new EventEmitter();
  faTimes=faTimes;

  onDelete(){
    this.onDeleteSkill.emit(this.skill);
  }
}
