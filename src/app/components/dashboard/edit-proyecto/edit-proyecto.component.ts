import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { proyecto } from '../../proyectos';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  @Input() proyecto!:proyecto;
  @Output() onEditProyecto: EventEmitter<proyecto> = new EventEmitter();
  
  formLogin!: FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre:[this.proyecto.title,[Validators.required]],
      descrip:[this.proyecto.descript,Validators.required],
      link:[this.proyecto.link,Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      id:this.proyecto.id,
      title: this.formLogin.value.nombre,
      descript: this.formLogin.value.descrip,
      link: this.formLogin.value.link
    }
    
    this.onEditProyecto.emit(exp);
  }
}
