import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  @Input() skill:string="";
  @Input() level:string="";
}
