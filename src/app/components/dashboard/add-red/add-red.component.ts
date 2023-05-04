import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Red } from 'src/app/models/red';

@Component({
  selector: 'app-add-red',
  templateUrl: './add-red.component.html',
  styleUrls: ['./add-red.component.css']
})
export class AddRedComponent {
  @Output() onAddRed: EventEmitter<Red> = new EventEmitter();

  formLogin=this.formBuilder.group({
    nombre_red:['',[Validators.required]],
    url_red:['',[Validators.required,Validators.maxLength(254)]],
    imagen:['',[Validators.required,Validators.maxLength(254)]]
  });

  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
  }

  sendRed():any{
    this.onAddRed.emit(this.formLogin.value as Red);
  }
  
  get nombre(){return this.formLogin.controls.nombre_red;}
  
  get url(){return this.formLogin.controls.url_red;}
  
  get imagen(){return this.formLogin.controls.imagen;}
}
