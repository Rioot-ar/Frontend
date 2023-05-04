import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent {
  @Input() persona!:Persona;
  @Output() onEditSobreMi: EventEmitter<Persona> = new EventEmitter();
  
  formLogin!:FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre:[this.persona.nombre,[Validators.required]],
      apellido:[this.persona.apellido,[Validators.required]],
      telefono:[this.persona.telefono,[Validators.required,Validators.max(9999999999)]],
      correo:[this.persona.correo,[Validators.required]],
      url_foto:[this.persona.url_foto,[Validators.required,Validators.maxLength(255)]],
      url_banner:[this.persona.url_banner,[Validators.required,Validators.maxLength(255)]],
      sobre_mi:[this.persona.sobre_mi,[Validators.required,Validators.maxLength(512)]],
      cargo:[this.persona.cargo,Validators.required]
    })
  }

  sendItem():any{
    const per = {
      id:this.persona.id,
      nombre:this.formLogin.value.nombre,
      apellido:this.formLogin.value.apellido,
      telefono:this.formLogin.value.telefono,
      correo:this.formLogin.value.correo,
      url_foto:this.formLogin.value.url_foto,
      url_banner: this.formLogin.value.url_banner,
      sobre_mi:this.formLogin.value.sobre_mi,
      cargo: this.formLogin.value.cargo
    }
    
    this.onEditSobreMi.emit(per);
  }
 
  get nombre() { return this.formLogin.controls['nombre']; }

  get apellido() { return this.formLogin.controls['apellido']; }

  get telefono() { return this.formLogin.controls['telefono']; }

  get correo() { return this.formLogin.controls['correo']; }

  get foto() { return this.formLogin.controls['url_foto']; }

  get banner() { return this.formLogin.controls['url_banner']; }

  get sobre() { return this.formLogin.controls['sobre_mi']; }

  get cargo() { return this.formLogin.controls['cargo']; }
}
