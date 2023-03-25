import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Red } from 'src/app/models/red';

@Component({
  selector: 'app-edit-red',
  templateUrl: './edit-red.component.html',
  styleUrls: ['./edit-red.component.css']
})
export class EditRedComponent {
  @Input() red!:Red;
  @Output() onEditRed: EventEmitter<Red> = new EventEmitter();
  
  formLogin!: FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_red:[this.red.nombre_red,[Validators.required]],
      url_red:[this.red.url_red,Validators.required],
      imagen:[this.red.imagen,Validators.required]
    })
  }

  sendRed():any{
    const exp = {
      id:this.red.id,
      nombre_red: this.formLogin.value.nombre_red,
      url_red: this.formLogin.value.url_red,
      imagen: this.formLogin.value.imagen
    }
    
    this.onEditRed.emit(exp);
  }

}
