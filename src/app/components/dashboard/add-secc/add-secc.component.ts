import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-add-secc',
  templateUrl: './add-secc.component.html',
  styleUrls: ['./add-secc.component.css']
})
export class AddSeccComponent {
  
  @Output() onAddExp: EventEmitter<Experiencia> = new EventEmitter();
  formLogin!: FormGroup;
  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder,private expService:ExperienciaService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_empresa:['',[Validators.required]],
      cargo:['',[Validators.required]],
      fecha_inicio:['',[Validators.required]],
      fecha_fin:['',[Validators.required]],
      descripcion:['',Validators.required],
      imagen:['',Validators.required]
    })
  }

  sendExperiencia():any{
    const exp = {
      nombre_empresa: this.formLogin.value.nombre_empresa,
      cargo: this.formLogin.value.cargo,
      fecha_inicio: this.formLogin.value.fecha_inicio,
      fecha_fin: this.formLogin.value.fecha_fin,
      descripcion: this.formLogin.value.descripcion,
      imagen: this.formLogin.value.imagen
    }
    this.onAddExp.emit(exp);
  }
}
