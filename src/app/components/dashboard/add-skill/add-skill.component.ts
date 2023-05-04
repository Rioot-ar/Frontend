import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Habilidad } from 'src/app/models/habilidad';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {
  @Output() onAddSkill: EventEmitter<Habilidad> = new EventEmitter();

  formLogin=this.formBuilder.group({
    nombre_habilidad:['',[Validators.required]],
    nivel:['',[Validators.required,Validators.min(0),Validators.max(100)]]
  });
  faPlus=faPlus;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void{
  }

  sendHabilidad():any{
    this.onAddSkill.emit(this.formLogin.value as Habilidad);
  }

  get nombre_habilidad(){return this.formLogin.controls.nombre_habilidad;}

  get nivel(){return this.formLogin.controls.nivel;}
}
