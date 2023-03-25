import { Component } from '@angular/core';
import { Red } from 'src/app/models/red';
import { RedService } from 'src/app/service/red.service';

@Component({
  selector: 'app-dashboard-red',
  templateUrl: './dashboard-red.component.html',
  styleUrls: ['./dashboard-red.component.css']
})
export class DashboardRedComponent {

  redes!:Red[];
  constructor(private redService:RedService){}
  ngOnInit():void{
    this.redService.getRed().subscribe((redes)=>{
      this.redes=redes;
    })
  }

  addRed(red:Red){
    this.redService.addRed(red).subscribe((red)=>{
      this.redes.push(red);
    });
  }

  editRed(red:Red){ 
    this.redService.editRed(red).subscribe(()=>{
      this.redes=this.redes.filter(i=>i.id !== red.id);
      this.redes.push(red);
    });
  }

  deleteRed(red:Red){
    this.redService.deleteRed(red).subscribe(()=>{
      this.redes=this.redes.filter(i=>i.id !== red.id);

    });
  }

}
