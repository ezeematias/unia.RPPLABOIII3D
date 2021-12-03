import Anuncio from "./anuncio-base.js";

export class Anuncio_Auto extends Anuncio {
    constructor(id, titulo, transaccion, descripcion, precio, puertas, kms, potencia, polarizado, cierre, alarma, seguro){
        super(id, titulo, transaccion, descripcion, precio);
        this.puertas = puertas;
        this.kms = kms;
        this.potencia = potencia;
        this.polarizado = polarizado;
        this.cierre = cierre;
        this.alarma = alarma;
        this.seguro = seguro;
    }
}