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
    switch (this.tipoSeccion) {
      case "Experiencia":
        this.expService.getPortfolio("Experiencia").subscribe((sec)=>{
          this.items=sec;
        })
        break;
      case "Educacion":
        this.expService.getPortfolio("Educacion").subscribe((sec)=>{
          this.items=sec;
        })
      break; 
      default:
        break;
    }

  }
}
