import { Component } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-dashboard-edu',
  templateUrl: './dashboard-edu.component.html',
  styleUrls: ['./dashboard-edu.component.css']
})
export class DashboardEduComponent {
  educaciones: Educacion[]=[];
  constructor(private eduService:EducacionService){}

  ngOnInit():void{
    
    this.eduService.getEducaciones().subscribe((edu)=>{
      this.educaciones=edu;
      //Mostrar primero las mas recientes
      this.educaciones.sort((b, a) => {
        const fechaFinA = new Date(a.fecha_fin);
        const fechaFinB = new Date(b.fecha_fin);
        console.log
        return fechaFinA.getTime() - fechaFinB.getTime();
      });
    })

  }

  addEducacion(edu:Educacion){
    this.eduService.setEducacion(edu).subscribe(edu=>{
      this.educaciones.push(edu);
    });
  }

  deleteEducacion(edu:Educacion){
    this.eduService.deleteEducacion(edu).subscribe(()=>{
      this.educaciones= this.educaciones.filter(i=>i.id !== edu.id);
    })
  }
  editEducacion(edu:Educacion){
    this.eduService.editEducacion(edu).subscribe(()=>{
      this.educaciones= this.educaciones.filter(i=>i.id !== edu.id);
      this.educaciones.push(edu);
    })
  }
}
