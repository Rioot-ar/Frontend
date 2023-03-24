import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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

  send(event:Event):any{
    // event.preventDefault;
    // this.auth.iniciarSesion(this.formLogin.value).subscribe(data=>{
    //   console.log("DATA: "+JSON.stringify(data));
    //   this.ruta.navigate(['/dashboard']);
    // })

  }

  get User(){
    return this.formLogin.get('user');
  }
  
  get Password(){
    return this.formLogin.get('password');
  }
}
