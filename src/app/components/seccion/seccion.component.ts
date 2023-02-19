import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { item } from '../item';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.css']
})
export class SeccionComponent {
  @Input() tipoSeccion:string="";

  items: item[]=[];
  constructor(private expService:PortfolioService){}

  ngOnInit():void{
    this.expService.getPortfolio().subscribe((sec)=>{
      switch (this.tipoSeccion) {
        case "Experiencia":
          this.items=sec.Experiencia;
          break;
        case "Educacion":
          this.items=sec.Educacion;
        break; 
        default:
          break;
      }
    })
  }
}
