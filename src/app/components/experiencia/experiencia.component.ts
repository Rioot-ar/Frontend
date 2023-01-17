import { Component } from '@angular/core';
import { item } from '../item';
import { ITEM } from '../mock-item';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  items:item[]=ITEM;

}
