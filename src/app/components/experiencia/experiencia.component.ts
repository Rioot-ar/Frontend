import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  items: Experiencia[]=[];
  constructor(private expService:ExperienciaService){}

  ngOnInit():void{
    
    this.expService.getExperiencias().subscribe((sec)=>{
      this.items=sec;
    })

  }
}
