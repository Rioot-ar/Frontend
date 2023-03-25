import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Red } from 'src/app/models/red';

@Component({
  selector: 'app-add-red',
  templateUrl: './add-red.component.html',
  styleUrls: ['./add-red.component.css']
})
export class AddRedComponent {
  @Output() onAddRed: EventEmitter<Red> = new EventEmitter();
  formLogin!: FormGroup;
  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre_red:['',[Validators.required]],
      url_red:['',Validators.required],
      imagen:['',Validators.required]
    })
  }

  sendRed():any{
    const exp = {
      nombre_red: this.formLogin.value.nombre_red,
      url_red: this.formLogin.value.url_red,
      imagen: this.formLogin.value.imagen
    }
    this.onAddRed.emit(exp);
  }
}
