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
    })

  }
}
