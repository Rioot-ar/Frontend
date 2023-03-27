import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-dashboard-acercade',
  templateUrl: './dashboard-acercade.component.html',
  styleUrls: ['./dashboard-acercade.component.css']
})
export class DashboardAcercadeComponent {
  persona!: Persona;
  constructor(private personaService:PersonaService){}

  ngOnInit():void{
    this.personaService.getPersona(1).subscribe((sob)=>{
      this.persona=sob[0];
    })
  }
  editSobreMi(persona:Persona){
    this.personaService.editPersona(persona).subscribe(()=>{
      this.persona=persona;
    });
  }
}
