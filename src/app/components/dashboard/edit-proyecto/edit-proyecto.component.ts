import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  @Input() proyecto!:Proyecto;
  @Output() onEditProyecto: EventEmitter<Proyecto> = new EventEmitter();
  
  formLogin!: FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_proyecto:[this.proyecto.nombre_proyecto,[Validators.required]],
      descripcion:[this.proyecto.descripcion,Validators.required],
      url_proyecto:[this.proyecto.url_proyecto,Validators.required],
      imagen:[this.proyecto.imagen,Validators.required]
    })
  }

  sendProyecto():any{
    const exp = {
      id:this.proyecto.id,
      nombre_proyecto: this.formLogin.value.nombre_proyecto,
      descripcion: this.formLogin.value.descripcion,
      url_proyecto: this.formLogin.value.url_proyecto,
      imagen: this.formLogin.value.imagen
    }
    
    this.onEditProyecto.emit(exp);
  }
}
