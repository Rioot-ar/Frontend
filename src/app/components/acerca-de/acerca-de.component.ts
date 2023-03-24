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
    
  }

  ngOnInit():void{
    this.personaService.getPersona(1).subscribe((sob)=>{
      console.log(sob);
      this.persona=sob;
    })
  }
}
