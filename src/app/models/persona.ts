export class Persona{
    id?:number;
    nombre: string;
    apellido: string;
    cargo: string;
    telefono: string;
    correo: string;
    sobre_mi: string; 
    url_foto: string;
    url_banner: string;
    
    constructor(nombre: string, apellido: string, cargo: string, telefono: string, correo: string, sobre_mi: string, url_foto: string, url_banner: string){

        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.telefono=telefono;
        this.correo=correo;
        this.sobre_mi=sobre_mi;
        this.url_banner=url_banner;
        this.url_foto=url_foto;

    }

    
}