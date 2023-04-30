import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faBars, faDungeon } from '@fortawesome/free-solid-svg-icons';
import { Credenciales } from 'src/app/models/credenciales';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  
  formLogin=this.formBuilder.group({
    email:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(8)]]
  });

  faBars = faBars;
  faDungeon = faDungeon;
  logStatus:boolean;
  

  constructor(private formBuilder: FormBuilder, private auth:AuthService, private ruta:Router){
    this.logStatus=auth.getStatus();
  }
  ngOnInit():void{


  }

  logout(){
    this.auth.cerrarSesion();
    this.ruta.navigate([""]);
  }

  login(){
    this.auth.iniciarSesion(this.formLogin.value as Credenciales).subscribe({
      next:(Algo)=>{
      },
      error: (error)=>{
        alert('ERROR EN LAS CREDENCIALES');
      },
      complete:()=>{
        
        this.ruta.navigate(['/dashboard']);
      }
    })
    this.formLogin.reset();
  }

  get email(){return this.formLogin.controls.email;}
  get password(){return this.formLogin.controls.password;}
}
