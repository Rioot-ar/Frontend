import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { item } from '../../item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-secc',
  templateUrl: './add-secc.component.html',
  styleUrls: ['./add-secc.component.css']
})
export class AddSeccComponent {
  @Input() tipoSeccion:string="";
  @Output() onAddSecc: EventEmitter<item> = new EventEmitter();
  formLogin!: FormGroup;
  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre:['',[Validators.required]],
      descrip:['',Validators.required],
      logo:['',Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      title: this.formLogin.value.nombre,
      descript: this.formLogin.value.descrip,
      img: this.formLogin.value.logo
    }
    this.onAddSecc.emit(exp);
  }
}
