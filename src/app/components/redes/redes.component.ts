import { Component } from '@angular/core';
import { Red } from 'src/app/models/red';
import { RedService } from 'src/app/service/red.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {
  
  redes!:Red[];
  constructor(private redService:RedService){}
  ngOnInit():void{

    this.redService.getRed().subscribe((red)=>{
      this.redes=red;
    })

  }

 
  
}
