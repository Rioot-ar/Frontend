import { Component, Input } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { item } from '../../item';

@Component({
  selector: 'app-dashboar-secc',
  templateUrl: './dashboar-secc.component.html',
  styleUrls: ['./dashboar-secc.component.css']
})
export class DashboarSeccComponent {
  @Input() tipoSeccion:string="";

  items: item[]=[];
  constructor(private expService:PortfolioService){}

  ngOnInit():void{
    switch (this.tipoSeccion) {
      case "Experiencia":
        this.expService.getPortfolio("Experiencia").subscribe((sec)=>{
          this.items=sec;
        })
        break;
      case "Educacion":
        this.expService.getPortfolio("Educacion").subscribe((sec)=>{
          this.items=sec;
        })
      break;
      default:
        break;
    }

  }

  addSecc(item:item){
    this.expService.setExperiencia(item,this.tipoSeccion).subscribe(item=>{
      this.items.push(item);
    });
  }

  deleteItem(item:item){
    this.expService.deleteSeccion(item,this.tipoSeccion).subscribe(()=>{
      this.items= this.items.filter(i=>i.id !== item.id);
    })
  }
  editItem(item:item){
    this.expService.editSeccion(item,this.tipoSeccion).subscribe(()=>{
      this.items= this.items.filter(i=>i.id !== item.id);
      this.items.push(item);
    })
  }
}
