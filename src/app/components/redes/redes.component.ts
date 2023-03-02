import { Component } from '@angular/core';
import { PortfolioService } from '../../service/portfolio.service';
import { redes } from '../redes';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  
  redes!:redes[];
  constructor(private expService:PortfolioService){}
  ngOnInit():void{

    this.expService.getPortfolio("redes").subscribe((red)=>{
      this.redes=red;
    })

  }

 
  
}
