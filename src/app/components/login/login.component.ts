import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  public formLogin!: FormGroup;
  faBars = faBars;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit():void{
    this.formLogin=this.formBuilder.group({
      user:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  send():any{
    console.log(this.formLogin.value);
  }
}
