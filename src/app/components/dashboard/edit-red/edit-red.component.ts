import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { redes } from '../../redes';

@Component({
  selector: 'app-edit-red',
  templateUrl: './edit-red.component.html',
  styleUrls: ['./edit-red.component.css']
})
export class EditRedComponent {
  @Input() red!:redes;
  @Output() onEditRed: EventEmitter<redes> = new EventEmitter();
  
  formLogin!: FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      nombre:[this.red.title,[Validators.required]],
      descrip:[this.red.link,Validators.required],
      logo:[this.red.img,Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      id:this.red.id,
      title: this.formLogin.value.nombre,
      link: this.formLogin.value.descrip,
      img: this.formLogin.value.logo
    }
    
    this.onEditRed.emit(exp);
  }

}
