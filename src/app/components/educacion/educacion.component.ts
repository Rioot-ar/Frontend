import { Component } from '@angular/core';
import { EducacionService } from 'src/app/service/educacion.service';
import { item } from '../item';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  items: item[]=[];
  constructor(private eduService:EducacionService){}

  ngOnInit():void{
    this.eduService.getEducacion().subscribe((edus)=>{
      this.items=edus;
    })
  }
}
