import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { sobreMi } from '../../sobreMi';

@Component({
  selector: 'app-dashboard-acercade',
  templateUrl: './dashboard-acercade.component.html',
  styleUrls: ['./dashboard-acercade.component.css']
})
export class DashboardAcercadeComponent {
  item!: sobreMi;
  constructor(private sobreService:PortfolioService){}

  ngOnInit():void{
    this.sobreService.getPortfolio("perfil").subscribe((sob)=>{
      this.item=sob;
    })
  }
  editSobreMi(item:sobreMi){
    this.sobreService.editSobreMi(item).subscribe(()=>{
      this.item=item;
    });
  }
}
