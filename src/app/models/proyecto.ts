export class Proyecto{
    id?:number;
    nombre_proyecto: string;
    descripcion: string;
    url_proyecto: string;
    imagen: string;
    
    constructor(nombre_proyecto: string, titulo: string, url_proyecto: string, descripcion: string, imagen: string){

        this.nombre_proyecto=nombre_proyecto;
        this.url_proyecto=url_proyecto;
        this.descripcion=descripcion;
        this.imagen=imagen;

    }
}