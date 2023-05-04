import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent {
  @Input() edu!:Educacion;
  @Output() onEditEdu: EventEmitter<Educacion> = new EventEmitter();
  
  formLogin!: FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_institucion:[this.edu.nombre_institucion,[Validators.required]],
      titulo:[this.edu.titulo,[Validators.required]],
      fecha_inicio:[this.edu.fecha_inicio,[Validators.required]],
      fecha_fin:[this.edu.fecha_fin,[Validators.required]],
      descripcion:[this.edu.descripcion,[Validators.required,Validators.maxLength(512)]],
      imagen:[this.edu.imagen,[Validators.required,Validators.maxLength(255)]]
    })
  }

  sendEducacion():any{
    const edu = {
      id:this.edu.id,
      nombre_institucion: this.formLogin.value.nombre_institucion,
      titulo: this.formLogin.value.titulo,
      fecha_inicio: this.formLogin.value.fecha_inicio,
      fecha_fin: this.formLogin.value.fecha_fin,
      descripcion: this.formLogin.value.descripcion,
      imagen: this.formLogin.value.imagen
    }
    this.onEditEdu.emit(edu);
  }

  get nombre() { return this.formLogin.controls['nombre_institucion']; }

  get titulo() { return this.formLogin.controls['titulo']; }

  get inicio() { return this.formLogin.controls['fecha_inicio']; }

  get fin() { return this.formLogin.controls['fecha_fin']; }

  get descripcion() { return this.formLogin.controls['descripcion']; }

  get imagen() { return this.formLogin.controls['imagen']; }
}
