import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-dashboar-exp',
  templateUrl: './dashboar-exp.component.html',
  styleUrls: ['./dashboar-exp.component.css']
})
export class DashboarExpComponent {

  experiencias: Experiencia[]=[];
  constructor(private expService:ExperienciaService){}

  ngOnInit():void{
    
    this.expService.getExperiencias().subscribe((exp)=>{
      this.experiencias=exp;
    })

  }

  addExperiencia(exp:Experiencia){
    this.expService.setExperiencia(exp).subscribe(exp=>{
      this.experiencias.push(exp);
    });
  }

  deleteExperiencia(exp:Experiencia){
    this.expService.deleteExperiencia(exp).subscribe(()=>{
      console.log(exp.id);
      this.experiencias= this.experiencias.filter(i=>i.id !== exp.id);
    })
  }
  editExperiencia(exp:Experiencia){
    this.expService.editExperiencia(exp).subscribe(()=>{
      this.experiencias= this.experiencias.filter(i=>i.id !== exp.id);
      this.experiencias.push(exp);
    })
  }
}
