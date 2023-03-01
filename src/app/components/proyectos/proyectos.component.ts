import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { proyecto } from '../proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos: proyecto[]=[];
  constructor(private proService:PortfolioService){}

  ngOnInit():void{
    this.proService.getPortfolio("Proyectos").subscribe((pro)=>{
      this.proyectos=pro;
    })
  }
}
