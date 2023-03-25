import { Component, Input } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-dashboard-proyecto',
  templateUrl: './dashboard-proyecto.component.html',
  styleUrls: ['./dashboard-proyecto.component.css']
})
export class DashboardProyectoComponent {

  proyectos: Proyecto[]=[];
  constructor(private expService:ProyectoService){}

  ngOnInit():void{
    this.expService.getProyecto().subscribe((sec)=>{
      this.proyectos=sec;
    })
  }

  addProyecto(proyecto:Proyecto){
    this.expService.addProyecto(proyecto).subscribe(proyecto=>{
      this.proyectos.push(proyecto);
    });
  }

  deleteProyecto(proyecto:Proyecto){
    this.expService.deleteProyecto(proyecto).subscribe(()=>{
      this.proyectos= this.proyectos.filter(i=>i.id !== proyecto.id)
    })
  }
  editProyecto(proyecto:Proyecto){
    this.expService.editProyecto(proyecto).subscribe(()=>{
      this.proyectos= this.proyectos.filter(i=>i.id !== proyecto.id);
      this.proyectos.push(proyecto);
    })
  }
}
