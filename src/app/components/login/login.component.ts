import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faBars = faBars;
  constructor(){}
  ngOnInit():void{

  }
  login(form:NgForm){
    const user=form.value.usr;

    const password=form.value.pwd;
  }
}
