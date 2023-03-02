import { Component, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { proyecto } from '../../proyectos';

@Component({
  selector: 'app-dashboard-proyecto',
  templateUrl: './dashboard-proyecto.component.html',
  styleUrls: ['./dashboard-proyecto.component.css']
})
export class DashboardProyectoComponent {

  proyectos: proyecto[]=[];
  constructor(private expService:PortfolioService){}

  ngOnInit():void{
    this.expService.getPortfolio("Proyectos").subscribe((sec)=>{
      this.proyectos=sec;
    })
  }

  addProyecto(proyecto:proyecto){
    this.expService.addProyecto(proyecto).subscribe(proyecto=>{
      this.proyectos.push(proyecto);
    });
  }

  deleteProyecto(proyecto:proyecto){
    this.expService.deleteProyecto(proyecto).subscribe(()=>{
      this.proyectos= this.proyectos.filter(i=>i.id !== proyecto.id)
    })
  }
  editProyecto(proyecto:proyecto){
    this.expService.editProyecto(proyecto).subscribe(()=>{
      this.proyectos= this.proyectos.filter(i=>i.id !== proyecto.id);
      this.proyectos.push(proyecto);
    })
  }
}
