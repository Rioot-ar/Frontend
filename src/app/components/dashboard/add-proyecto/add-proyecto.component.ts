import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {
  @Output() onAddProyecto: EventEmitter<Proyecto> = new EventEmitter();

  formLogin=this.formBuilder.group({
    nombre_proyecto:['',[Validators.required]],
    descripcion:['',[Validators.required,Validators.maxLength(511)]],
    url_proyecto:['',[Validators.required,Validators.maxLength(254)]],
    imagen:['',[Validators.required,Validators.maxLength(254)]]
  });


  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
  }

  sendProyecto():any{
    this.onAddProyecto.emit(this.formLogin.value as Proyecto);
  }

  get nombre(){return this.formLogin.controls.nombre_proyecto;}

  get descripcion(){return this.formLogin.controls.descripcion;}
  
  get url(){return this.formLogin.controls.url_proyecto;}
  
  get imagen(){return this.formLogin.controls.imagen;}
}
