import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {
  @Output() onAddProyecto: EventEmitter<Proyecto> = new EventEmitter();
  formLogin!: FormGroup;
  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_proyecto:['',[Validators.required]],
      descripcion:['',Validators.required],
      url_proyecto:['',Validators.required],
      imagen:['',Validators.required]
    })
  }

  sendProyecto():any{
    const exp = {
      nombre_proyecto: this.formLogin.value.nombre_proyecto,
      descripcion: this.formLogin.value.descripcion,
      url_proyecto: this.formLogin.value.url_proyecto,
      imagen: this.formLogin.value.imagen,
    }
    this.onAddProyecto.emit(exp);
  }
}
