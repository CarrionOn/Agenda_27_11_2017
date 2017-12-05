import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
@Injectable()
export class ContactosService {

  private _nombres: Contacto[] = [
    new Contacto(1, 'Tim', 'Cook'),
    new Contacto(2, 'Steve', 'Wozniak'),
    new Contacto(3, 'Bill', 'Gates'),
    new Contacto(4, 'Sundar', 'Pichai'),
    new Contacto(5, 'Elon', 'Musk'),
    new Contacto(6, 'Satya', 'Nadella')

  ]

  obtenerContactos(): Contacto[] {
    return this._nombres
  }

  agregarContacto(contacto: Contacto): void {
    this._nombres.push(contacto);
  }

  eliminarContacto(nombre: Contacto): void {
    this._nombres = this._nombres.filter(n => n !== nombre);
   }

  constructor() { }

}


