import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { skill } from '../../skill';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  @Input() skill!:skill;
  @Output() onEditSkill:EventEmitter<skill> = new EventEmitter();

  faPen = faPen;
  formLogin!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      skill:[this.skill.skill,[Validators.required]],
      level:[this.skill.level,Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      id:this.skill.id,
      skill: this.formLogin.value.skill,
      level: this.formLogin.value.level,
    }
    
    this.onEditSkill.emit(exp);
  }

}
