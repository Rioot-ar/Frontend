import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent {
  @Input() exp!:Experiencia;
  @Output() onEditExp: EventEmitter<Experiencia> = new EventEmitter();
  
  formLogin!: FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_empresa:[this.exp.nombre_empresa,[Validators.required]],
      cargo:[this.exp.cargo,[Validators.required]],
      fecha_inicio:[this.exp.fecha_inicio,[Validators.required]],
      fecha_fin:[this.exp.fecha_fin,[Validators.required]],
      descripcion:[this.exp.descripcion,Validators.required],
      imagen:[this.exp.imagen,Validators.required]
    })
  }

  sendExperiencia():any{
    const exp = {
      id:this.exp.id,
      nombre_empresa: this.formLogin.value.nombre_empresa,
      cargo: this.formLogin.value.cargo,
      fecha_inicio: this.formLogin.value.fecha_inicio,
      fecha_fin: this.formLogin.value.fecha_fin,
      descripcion: this.formLogin.value.descripcion,
      imagen: this.formLogin.value.imagen
    }
    this.onEditExp.emit(exp);
  }

}
