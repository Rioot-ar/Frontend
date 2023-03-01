import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { GraficosComponent } from './components/graficos/graficos.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SeccionComponent } from './components/seccion/seccion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditSeccComponent } from './components/dashboard/edit-secc/edit-secc.component';
import { AddSeccComponent } from './components/dashboard/add-secc/add-secc.component';
import { DashboarSeccComponent } from './components/dashboard/dashboar-secc/dashboar-secc.component';
import { DeleteSeccComponent } from './components/dashboard/delete-secc/delete-secc.component';
import { DashboardSkillsComponent } from './components/dashboard/dashboard-skills/dashboard-skills.component';
import { DeleteSkillComponent } from './components/dashboard/delete-skill/delete-skill.component';
import { AddSkillComponent } from './components/dashboard/add-skill/add-skill.component';
import { EditSkillComponent } from './components/dashboard/edit-skill/edit-skill.component';
import { DashboardProyectoComponent } from './components/dashboard/dashboard-proyecto/dashboard-proyecto.component';
import { EditProyectoComponent } from './components/dashboard/edit-proyecto/edit-proyecto.component';
import { DeleteProyectoComponent } from './components/dashboard/delete-proyecto/delete-proyecto.component';
import { AddProyectoComponent } from './components/dashboard/add-proyecto/add-proyecto.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigatorComponent,
    BannerComponent,
    AcercaDeComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    GraficosComponent,
    LoginComponent,
    InicioComponent,
    DashboardComponent,
    ErrorComponent,
    SeccionComponent,
    EditSeccComponent,
    AddSeccComponent,
    DashboarSeccComponent,
    DeleteSeccComponent,
    DashboardSkillsComponent,
    DeleteSkillComponent,
    AddSkillComponent,
    EditSkillComponent,
    DashboardProyectoComponent,
    EditProyectoComponent,
    DeleteProyectoComponent,
    AddProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
