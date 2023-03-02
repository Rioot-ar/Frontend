import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { sobreMi } from '../../sobreMi';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent {
  @Input() sobreMi!:sobreMi;
  @Output() onEditSobreMi: EventEmitter<sobreMi> = new EventEmitter();
  
  formLogin!: FormGroup;
  faPen = faPen;

  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      img:[this.sobreMi.img,[Validators.required]],
      banner:[this.sobreMi.banner,Validators.required],
      descript:[this.sobreMi.descript,Validators.required],
      title:[this.sobreMi.title,Validators.required],
      cargo:[this.sobreMi.cargo,Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      img:this.formLogin.value.img,
      banner: this.formLogin.value.banner,
      descript: this.formLogin.value.descript,
      title: this.formLogin.value.title,
      cargo: this.formLogin.value.cargo
    }
    
    this.onEditSobreMi.emit(exp);
  }
  
}
