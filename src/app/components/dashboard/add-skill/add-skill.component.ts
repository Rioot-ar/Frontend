import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Habilidad } from 'src/app/models/habilidad';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent {
  @Output() onAddSkill: EventEmitter<Habilidad> = new EventEmitter();

  formLogin!: FormGroup;
  faPlus=faPlus;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_habilidad:['',[Validators.required]],
      nivel:['',Validators.required]
    })
  }

  sendHabilidad():any{
    const exp = {
      nombre_habilidad: this.formLogin.value.nombre_habilidad,
      nivel: this.formLogin.value.nivel
    }
    this.onAddSkill.emit(exp);
  }
}
