import { Component } from '@angular/core';
import { Habilidad } from 'src/app/models/habilidad';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent {
  skills: Habilidad[]=[];
  constructor(private sklService:SkillService){}

  ngOnInit():void{
    this.sklService.getSkill().subscribe((skl)=>{
      this.skills=skl;
    })
  }
}
