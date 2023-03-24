export class Red{
    id?:number;
    nombre_red: string;
    url_red: string;
    imagen: string;
    
    constructor(nombre_red: string, url_red: string, imagen: string){

        this.nombre_red=nombre_red;
        this.url_red=url_red;
        this.imagen=imagen;

    }
}