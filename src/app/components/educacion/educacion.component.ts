import { Component } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  items: Educacion[]=[];
  constructor(private eduService:EducacionService){}

  ngOnInit():void{
    
    this.eduService.getEducaciones().subscribe((sec)=>{
      this.items=sec;
      //Mostrar primero las mas recientes
      this.items.sort((b, a) => {
        const fechaFinA = new Date(a.fecha_fin);
        const fechaFinB = new Date(b.fecha_fin);
        console.log
        return fechaFinA.getTime() - fechaFinB.getTime();
      });
    })

  }

}
