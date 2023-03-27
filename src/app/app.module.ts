import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GraficosComponent } from './components/graficos/graficos.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardSkillsComponent } from './components/dashboard/dashboard-skills/dashboard-skills.component';
import { DeleteSkillComponent } from './components/dashboard/delete-skill/delete-skill.component';
import { AddSkillComponent } from './components/dashboard/add-skill/add-skill.component';
import { EditSkillComponent } from './components/dashboard/edit-skill/edit-skill.component';
import { DashboardProyectoComponent } from './components/dashboard/dashboard-proyecto/dashboard-proyecto.component';
import { EditProyectoComponent } from './components/dashboard/edit-proyecto/edit-proyecto.component';
import { DeleteProyectoComponent } from './components/dashboard/delete-proyecto/delete-proyecto.component';
import { AddProyectoComponent } from './components/dashboard/add-proyecto/add-proyecto.component';
import { DashboardAcercadeComponent } from './components/dashboard/dashboard-acercade/dashboard-acercade.component';
import { EditAcercadeComponent } from './components/dashboard/edit-acercade/edit-acercade.component';
import { RedesComponent } from './components/redes/redes.component';
import { DashboardRedComponent } from './components/dashboard/dashboard-red/dashboard-red.component';
import { AddRedComponent } from './components/dashboard/add-red/add-red.component';
import { DeleteRedComponent } from './components/dashboard/delete-red/delete-red.component';
import { EditRedComponent } from './components/dashboard/edit-red/edit-red.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AddExpComponent } from './components/dashboard/add-exp/add-exp.component';
import { DeleteExpComponent } from './components/dashboard/delete-exp/delete-exp.component';
import { EditExpComponent } from './components/dashboard/edit-exp/edit-exp.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { DashboardEduComponent } from './components/dashboard/dashboard-edu/dashboard-edu.component';
import { AddEduComponent } from './components/dashboard/add-edu/add-edu.component';
import { DeleteEduComponent } from './components/dashboard/delete-edu/delete-edu.component';
import { EditEduComponent } from './components/dashboard/edit-edu/edit-edu.component';
import { DashboardExpComponent } from './components/dashboard/dashboard-exp/dashboard-exp.component';
import { AuthInterceptor } from './service/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    AcercaDeComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    GraficosComponent,
    LoginComponent,
    InicioComponent,
    DashboardComponent,
    ErrorComponent,
    EditExpComponent,
    AddExpComponent,
    DeleteExpComponent,
    DashboardSkillsComponent,
    DeleteSkillComponent,
    AddSkillComponent,
    EditSkillComponent,
    DashboardProyectoComponent,
    EditProyectoComponent,
    DeleteProyectoComponent,
    AddProyectoComponent,
    DashboardAcercadeComponent,
    EditAcercadeComponent,
    RedesComponent,
    DashboardRedComponent,
    AddRedComponent,
    DeleteRedComponent,
    EditRedComponent,
    ExperienciaComponent,
    EducacionComponent,
    DashboardEduComponent,
    AddEduComponent,
    DeleteEduComponent,
    EditEduComponent,
    DashboardExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
