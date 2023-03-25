import { Component } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-dashboard-skills',
  templateUrl: './dashboard-skills.component.html',
  styleUrls: ['./dashboard-skills.component.css']
})
export class DashboardSkillsComponent {
  skills: Habilidad[]=[];
  constructor(private sklService:SkillService){}

  ngOnInit():void{
    this.sklService.getSkill().subscribe((skl)=>{
      this.skills=skl;
    })
  }

  deleteSkill(skill:Habilidad){
    this.sklService.deleteSkill(skill).subscribe(()=>{
      this.skills= this.skills.filter(s=>s.id !== skill.id);
    })
  }

  editSkill(skill:Habilidad){
    this.sklService.editSkill(skill).subscribe(()=>{
      this.skills= this.skills.filter(s=>s.id !== skill.id);
      this.skills.push(skill);
    })
  }

  addSkill(skill:Habilidad){
    this.sklService.addSkill(skill).subscribe(()=>{
      this.skills.push(skill);
    })
  }
}
