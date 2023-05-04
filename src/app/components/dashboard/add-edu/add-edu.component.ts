import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent {
  @Output() onAddEdu: EventEmitter<Educacion> = new EventEmitter();

  formLogin=this.formBuilder.group({
    nombre_institucion:['',[Validators.required]],
    titulo:['',[Validators.required]],
    fecha_inicio:['',[Validators.required]],
    fecha_fin:['',[Validators.required]],
    descripcion:['',[Validators.required,Validators.maxLength(254)]],
    imagen:['',[Validators.required,Validators.maxLength(511)]]
  });
  faPlus=faPlus;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
  }

  sendEducacion():any{
    this.onAddEdu.emit(this.formLogin.value as Educacion);
  }

  get nombre(){return this.formLogin.controls.nombre_institucion};
  
  get titulo(){return this.formLogin.controls.titulo};
  
  get inicio(){return this.formLogin.controls.fecha_inicio};
  
  get fin(){return this.formLogin.controls.fecha_fin};
  
  get descripcion(){return this.formLogin.controls.descripcion};
  
  get imagen(){return this.formLogin.controls.imagen};
}
