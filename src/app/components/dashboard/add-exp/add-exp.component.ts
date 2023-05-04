import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent {
  
  @Output() onAddExp: EventEmitter<Experiencia> = new EventEmitter();

  formLogin = this.formBuilder.group({
    nombre_empresa:['',[Validators.required]],
    cargo:['',[Validators.required]],
    fecha_inicio:['',[Validators.required]],
    fecha_fin:['',[Validators.required]],
    descripcion:['',[Validators.required,Validators.maxLength(512)]],
    imagen:['',[Validators.required,Validators.maxLength(255)]]
  })

  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
  }

  sendExperiencia():any{
    this.onAddExp.emit(this.formLogin.value as Experiencia);
  }

  get nombre(){return this.formLogin.controls.nombre_empresa};
  
  get titulo(){return this.formLogin.controls.cargo};
  
  get inicio(){return this.formLogin.controls.fecha_inicio};
  
  get fin(){return this.formLogin.controls.fecha_fin};
  
  get descripcion(){return this.formLogin.controls.descripcion};
  
  get imagen(){return this.formLogin.controls.imagen};
}
