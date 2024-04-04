import { Injectable } from '@angular/core';
import { Heroe } from '../../models/heroe.interface';
import { HEROES } from '../../../mocks/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private listadoHeroes: Heroe[] = [];

  constructor() {
    this.listadoHeroes = HEROES;
  }

  public getListadoHeroes(): Observable<Heroe[]> {
    return of(this.listadoHeroes);
  }

  public getHeroe(id: number): Observable<Heroe> {
    const heroe = this.listadoHeroes.find((heroe: Heroe) => heroe.id === id) || { name: '', id: 0 };
    return of(heroe);
  }

  public insertarHeroe(name: string): Observable<boolean> {
    const existeHeroe = this.listadoHeroes.some(heroe => heroe.name === name);
    if (!existeHeroe) {
      const heroe: Heroe = {
        id: this.generarId(),
        name: name
      };

      this.listadoHeroes.push(heroe);
    }

    return of(!existeHeroe);
  }

  public modificarHeroe(heroe: Heroe): Observable<boolean> {
    const existeHeroe = this.listadoHeroes.some(h => h.name === heroe.name && h.id !== heroe.id);
    if (!existeHeroe) {
      const indiceHeroe = this.listadoHeroes.findIndex(h => h.id === heroe.id);
      this.listadoHeroes[indiceHeroe].name = heroe.name; 
    }

    return of(!existeHeroe);
  }

  public borrarHeroe(id: number): Observable<boolean> {
    const indiceHeroe = this.listadoHeroes.findIndex(heroe => heroe.id === id);
    if (indiceHeroe !== -1) {
      this.listadoHeroes.splice(indiceHeroe, 1);
    }

    return of(indiceHeroe !== -1);
  }

  private generarId(): number {
    return this.listadoHeroes.length > 0 ? Math.max(...this.listadoHeroes.map(heroe => heroe.id)) + 1 : 1;
  }


}
