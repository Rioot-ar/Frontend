import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { skill } from '../skill';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent {
  skills: skill[]=[];
  constructor(private sklService:PortfolioService){}

  ngOnInit():void{
    this.sklService.getPortfolio("barprogress").subscribe((skl)=>{
      this.skills=skl;
    })
  }
}
