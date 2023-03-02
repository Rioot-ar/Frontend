import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHandler} from '@angular/common/http'
import { item } from '../components/item';
import { skill } from '../components/skill';
import { proyecto } from '../components/proyectos';
import { sobreMi } from '../components/sobreMi';
import { redes } from '../components/redes';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private urlApi = 'http://localhost:5000';
  private portfolio = this.http.get(this.urlApi);
  constructor(private http:HttpClient) { }
  
  getPortfolio(seccion:String): Observable<any>{
    return this.http.get(`${this.urlApi}/${seccion}`);
  }



  setExperiencia(item:item,seccion:String): Observable<item>{
    const url = `${this.urlApi}/${seccion}`;
    return this.http.post<item>(url,item);
  }

  deleteSeccion(item:item,seccion:String): Observable<item>{
    const url = `${this.urlApi}/${seccion}/${item.id}`;
    return this.http.delete<item>(url);
  }

  editSeccion(item:item,seccion:String): Observable<item>{
    const url = `${this.urlApi}/${seccion}/${item.id}`;
    return this.http.put<item>(url,item);
  }



  deleteSkill(skill:skill): Observable<skill>{
    const url = `${this.urlApi}/barprogress/${skill.id}`;
    return this.http.delete<skill>(url);
  }

  editSkill(skill:skill): Observable<skill>{
    const url = `${this.urlApi}/barprogress//${skill.id}`;
    return this.http.put<skill>(url,skill);
  }

  addSkill(skill:skill): Observable<skill>{
    const url = `${this.urlApi}/barprogress`;
    return this.http.post<skill>(url,skill);
  }



  addProyecto(Proyecto:proyecto): Observable<proyecto>{
    const url = `${this.urlApi}/proyectos`;
    return this.http.post<proyecto>(url,Proyecto);
  }

  deleteProyecto(Proyecto:proyecto): Observable<proyecto>{
    const url = `${this.urlApi}/proyectos/${Proyecto.id}`;
    return this.http.delete<proyecto>(url);
  }

  editProyecto(Proyecto:proyecto): Observable<proyecto>{
    const url = `${this.urlApi}/proyectos/${Proyecto.id}`;
    return this.http.put<proyecto>(url,Proyecto);
  }



  editSobreMi(sobreMi:sobreMi): Observable<sobreMi>{
    const url = `${this.urlApi}/perfil`;
    return this.http.put<sobreMi>(url,sobreMi);
  }


  deleteRed(red:redes): Observable<redes>{
    const url = `${this.urlApi}/redes/${red.id}`;
    return this.http.delete<redes>(url);
  }

  editRed(red:redes): Observable<redes>{
    const url = `${this.urlApi}/redes/${red.id}`;
    return this.http.put<redes>(url,red);
  }

  addRed(red:redes): Observable<redes>{
    const url = `${this.urlApi}/redes`;
    return this.http.post<redes>(url,red);
  }
}


