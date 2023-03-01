import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { skill } from '../../skill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {
  @Input() tipoSeccion:string="";
  @Output() onAddSkill: EventEmitter<skill> = new EventEmitter();

  formLogin!: FormGroup;
  faPlus=faPlus;

  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}

  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      skill:['',[Validators.required]],
      level:['',Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      skill: this.formLogin.value.skill,
      level: this.formLogin.value.level
    }
    this.onAddSkill.emit(exp);
  }
}
