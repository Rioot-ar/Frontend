import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { proyecto } from '../../proyectos';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent {
  @Output() onAddProyecto: EventEmitter<proyecto> = new EventEmitter();
  formLogin!: FormGroup;
  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre:['',[Validators.required]],
      descrip:['',Validators.required],
      link:['',Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      title: this.formLogin.value.nombre,
      descript: this.formLogin.value.descrip,
      link: this.formLogin.value.link
    }
    this.onAddProyecto.emit(exp);
  }
}
