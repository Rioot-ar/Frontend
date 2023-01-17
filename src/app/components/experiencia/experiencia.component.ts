import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { item } from '../item';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  items: item[]=[];
  constructor(private expService:PortfolioService){}

  ngOnInit():void{
    this.expService.getPortfolio().subscribe((exps)=>{
      console.log(exps);
      this.items=exps.experiencia;
    })
  }
}
