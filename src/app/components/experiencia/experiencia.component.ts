import { Component } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { item } from '../item';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  items: item[]=[];
  constructor(private expService:ExperienciaService){}

  ngOnInit():void{
    this.expService.getExperiencias().subscribe((exps)=>{
      this.items=exps;
    })
  }
}
