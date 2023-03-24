export class Educacion{
    id?:number;
    nombre_institucion: string;
    titulo: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    imagen: string;
    
    constructor(nombre_institucion: string, titulo: string, fecha_inicio: string, fecha_fin: string, descripcion: string, imagen: string){

        this.nombre_institucion=nombre_institucion;
        this.titulo=titulo;
        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
        this.descripcion=descripcion;
        this.imagen=imagen;

    }
}