import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { skill } from '../../skill';

@Component({
  selector: 'app-dashboard-skills',
  templateUrl: './dashboard-skills.component.html',
  styleUrls: ['./dashboard-skills.component.css']
})
export class DashboardSkillsComponent {
  skills: skill[]=[];
  constructor(private sklService:PortfolioService){}

  ngOnInit():void{
    this.sklService.getPortfolio("barprogress").subscribe((skl)=>{
      this.skills=skl;
    })
  }

  deleteSkill(skill:skill){
    this.sklService.deleteSkill(skill).subscribe(()=>{
      this.skills= this.skills.filter(s=>s.id !== skill.id)
    })
  }

  editSkill(skill:skill){
    this.sklService.editSkill(skill).subscribe(()=>{

    })
  }

  addSkill(skill:skill){
    this.sklService.addSkill(skill).subscribe(()=>{

    })
  }
}
