import { Component } from '@angular/core';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { item } from '../../item';
import { PortfolioService } from '../../../service/portfolio.service'
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  faPen = faPen;


  constructor(private portfolioService: PortfolioService){}
  ngOnInit():void{}

  addSecc(item:item,tipoSeccion:String){
    this.portfolioService.setExperiencia(item,tipoSeccion).subscribe(item=>{});
  }
}
