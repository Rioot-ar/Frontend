import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { item } from '../item';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  items: item[]=[];
  constructor(private eduService:PortfolioService){}

  ngOnInit():void{
    this.eduService.getPortfolio().subscribe((edus)=>{
      this.items=edus.educacion;
    })
  }
}
