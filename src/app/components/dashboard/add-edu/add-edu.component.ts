import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent {
  @Output() onAddEdu: EventEmitter<Educacion> = new EventEmitter();
  formLogin!: FormGroup;
  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_institucion:['',[Validators.required]],
      titulo:['',[Validators.required]],
      fecha_inicio:['',[Validators.required]],
      fecha_fin:['',[Validators.required]],
      descripcion:['',Validators.required],
      imagen:['',Validators.required]
    })
  }

  sendEducacion():any{
    const edu = {
      nombre_institucion: this.formLogin.value.nombre_institucion,
      titulo: this.formLogin.value.titulo,
      fecha_inicio: this.formLogin.value.fecha_inicio,
      fecha_fin: this.formLogin.value.fecha_fin,
      descripcion: this.formLogin.value.descripcion,
      imagen: this.formLogin.value.imagen
    }
    this.onAddEdu.emit(edu);
  }
}
