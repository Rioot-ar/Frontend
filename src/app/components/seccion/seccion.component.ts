import { Component, Input, OnInit } from '@angular/core';
import { Seccion } from 'src/app/models/seccion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  @Input() tipoSeccion:string="";

  items: Seccion[]=[];
  constructor(private expService:ExperienciaService, private eduService:EducacionService){}

  ngOnInit():void{
    switch (this.tipoSeccion) {
      case "Experiencia":
        this.expService.getExperiencias().subscribe((sec)=>{
          this.items=sec;
          console.log(this.items);
        })
        break;
      case "Educacion":
        this.eduService.getEducaciones().subscribe((sec)=>{
          this.items=sec;
          console.log(this.items);
        })
      break; 
      default:
        break;
    }

  }
}
