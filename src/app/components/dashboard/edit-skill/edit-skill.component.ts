import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Habilidad } from 'src/app/models/habilidad';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  @Input() skill!:Habilidad;
  @Output() onEditSkill:EventEmitter<Habilidad> = new EventEmitter();

  faPen = faPen;
  formLogin!: FormGroup;
  
  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_habilidad:[this.skill.nombre_habilidad,[Validators.required]],
      nivel:[this.skill.nivel,Validators.required]
    })
  }

  sendHabilidad():any{
    const exp = {
      id:this.skill.id,
      nombre_habilidad: this.formLogin.value.nombre_habilidad,
      nivel: this.formLogin.value.nivel,
    }
    
    this.onEditSkill.emit(exp);
  }

}
