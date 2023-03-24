export class Experiencia{
    id?:number;
    nombre_empresa: string;
    cargo: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    imagen: string;
    
    constructor(nombre_empresa: string, cargo: string, fecha_inicio: string, fecha_fin: string, descripcion: string, imagen: string){

        this.nombre_empresa=nombre_empresa;
        this.cargo=cargo;
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
        this.descripcion=descripcion;
        this.imagen=imagen;

    }
}