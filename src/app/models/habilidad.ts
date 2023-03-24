export class Habilidad{
    id?:number;
    nombre_habilidad: string;
    nivel: string;
    
    constructor(nombre_habilidad: string, nivel: string){

        this.nombre_habilidad=nombre_habilidad;
        this.nivel=nivel;

    }
}