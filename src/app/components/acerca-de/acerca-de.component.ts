import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { sobreMi } from '../sobreMi';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {
  item!: sobreMi;
  constructor(private sobreService:PortfolioService){}

  ngOnInit():void{
    this.sobreService.getPortfolio("perfil").subscribe((sob)=>{
      this.item=sob;
    })
  }
}
