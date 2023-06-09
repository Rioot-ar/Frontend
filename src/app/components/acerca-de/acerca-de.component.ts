import { Component } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent {
  persona!:Persona;
  
  constructor(private personaService:PersonaService){
    this.personaService.getPersona(1).subscribe((sob)=>{
      this.persona=sob[0];
    })
  }

  ngOnInit():void{

  }
}
