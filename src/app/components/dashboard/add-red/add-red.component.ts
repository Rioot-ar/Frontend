import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { redes } from '../../redes';

@Component({
  selector: 'app-add-red',
  templateUrl: './add-red.component.html',
  styleUrls: ['./add-red.component.css']
})
export class AddRedComponent {
  @Output() onAddRed: EventEmitter<redes> = new EventEmitter();
  formLogin!: FormGroup;
  faPlus=faPlus;
  constructor(private formBuilder: FormBuilder,private folioService:PortfolioService){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      title:['',[Validators.required]],
      link:['',Validators.required],
      img:['',Validators.required]
    })
  }

  sendItem():any{
    const exp = {
      title: this.formLogin.value.title,
      link: this.formLogin.value.link,
      img: this.formLogin.value.img
    }
    this.onAddRed.emit(exp);
  }
}
