import { Component, Input } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-dashboard-exp',
  templateUrl: './dashboard-exp.component.html',
  styleUrls: ['./dashboard-exp.component.css']
})
export class DashboardExpComponent {

  experiencias: Experiencia[]=[];
  constructor(private expService:ExperienciaService){}

  ngOnInit():void{
    
    this.expService.getExperiencias().subscribe((exp)=>{
      this.experiencias=exp;
      
      //Mostrar primero las mas recientes
      this.experiencias.sort((b, a) => {
        const fechaFinA = new Date(a.fecha_fin);
        const fechaFinB = new Date(b.fecha_fin);
        console.log
        return fechaFinA.getTime() - fechaFinB.getTime();
      });
    })

  }

  addExperiencia(exp:Experiencia){
    this.expService.setExperiencia(exp).subscribe(exp=>{
      this.experiencias.push(exp);
    });
  }

  deleteExperiencia(exp:Experiencia){
    this.expService.deleteExperiencia(exp).subscribe(()=>{
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
