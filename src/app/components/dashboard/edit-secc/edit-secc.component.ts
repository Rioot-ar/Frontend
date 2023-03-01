import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { item } from '../../item';

@Component({
  selector: 'app-edit-secc',
  templateUrl: './edit-secc.component.html',
  styleUrls: ['./edit-secc.component.css']
})
export class EditSeccComponent {
  @Input() item!:item;
  @Output() onEditItem: EventEmitter<item> = new EventEmitter();
  @Input() tipoSeccion:string="";
  
  formLogin!: FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre:[this.item.title,[Validators.required]],
      descrip:[this.item.descript,Validators.required],
      logo:[this.item.img,Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      id:this.item.id,
      title: this.formLogin.value.nombre,
      descript: this.formLogin.value.descrip,
      img: this.formLogin.value.logo
    }
    
    this.onEditItem.emit(exp);
  }

}
