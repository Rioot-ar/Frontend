import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Credenciales } from 'src/app/models/credenciales';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  public formLogin: FormGroup;
  faBars = faBars;
  

  constructor(private formBuilder: FormBuilder, private auth:AuthService, private ruta:Router){
    this.formLogin=this.formBuilder.group({
      user:['',[Validators.required]],
      password:['',Validators.required]
    })
  }
  ngOnInit():void{
  }

  send(event:Event){

    const creds = {
      email: this.formLogin.value.user,
      password: this.formLogin.value.password
    }
    this.auth.iniciarSesion(creds)
      .subscribe(response=>{
        
        this.ruta.navigate(['/dashboard']);
      })


  }

  
}
