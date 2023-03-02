import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { redes } from '../../redes';

@Component({
  selector: 'app-dashboard-red',
  templateUrl: './dashboard-red.component.html',
  styleUrls: ['./dashboard-red.component.css']
})
export class DashboardRedComponent {

  redes!:redes[];
  constructor(private portfolioService:PortfolioService){}
  ngOnInit():void{
    this.portfolioService.getPortfolio("redes").subscribe((redes)=>{
      this.redes=redes;
    })
  }

  addRed(red:redes){
    this.portfolioService.addRed(red).subscribe((red)=>{
      this.redes.push(red);
    });
  }

  editRed(red:redes){ 
    this.portfolioService.editRed(red).subscribe(()=>{
      this.redes=this.redes.filter(i=>i.id !== red.id);
      this.redes.push(red);
    });
  }

  deleteRed(red:redes){
    this.portfolioService.deleteRed(red).subscribe(()=>{
      this.redes=this.redes.filter(i=>i.id !== red.id);

    });
  }

}
