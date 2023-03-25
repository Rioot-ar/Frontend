import { Component } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: Proyecto[]=[];
  actives!:number;

  constructor(private proService:ProyectoService){}

  ngOnInit():void{
    this.proService.getProyecto().subscribe((pro)=>{
      this.proyectos=pro;
      this.actives=pro[0].id;
    })
  }
}
