import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { skill } from '../../skill';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent {
  @Input() skill!:skill;
  @Output() onDeleteSkill:EventEmitter<skill> = new EventEmitter();
  faTimes=faTimes;

  onDelete(){
    this.onDeleteSkill.emit(this.skill);
  }
}
