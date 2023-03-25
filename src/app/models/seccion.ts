export class Seccion{
    id?:number;
    nombre_empresa!: string;
    nombre_institucion!:string;
    titulo!:string;
    cargo!: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    imagen: string;
    
    constructor(fecha_inicio: string, fecha_fin: string, descripcion: string, imagen: string){

        this.fecha_inicio=fecha_inicio;
        this.fecha_fin=fecha_fin;
        this.descripcion=descripcion;
        this.imagen=imagen;

    }
}