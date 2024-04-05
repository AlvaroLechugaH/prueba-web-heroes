import { TestBed } from '@angular/core/testing';

import { HeroeService } from './heroe.service';
import { HEROES } from '../../../mocks/mock-heroes';

describe('HeroeService', () => {
  let service: HeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Retornar listado de héroes', (done: DoneFn) => {
    service.getListadoHeroes().subscribe({
      next: heroes => {
        expect(heroes).toEqual(HEROES);
        done();
      }
    });
  });

  it('Retornar héroe por id', (done: DoneFn) => {
    const heroId = 1;
    service.getHeroe(heroId).subscribe({
      next: hero => {
        expect(hero.id).toEqual(heroId);
        done();
      }
    });
  });

  it('Insertar nuevo héroe', (done: DoneFn) => {
    const newHeroName = 'New Hero';
    service.insertarHeroe(newHeroName).subscribe({
      next: result => {
        expect(result).toBeTrue();
        expect(service['listadoHeroes'].find(hero => hero.name === newHeroName)).toBeTruthy();
        done();
      }
    });
  });

  it('No insertar un héroe si ya existe con ese nombre', (done: DoneFn) => {
    const existingHeroName = HEROES[0].name;
    service.insertarHeroe(existingHeroName).subscribe({
      next: result => {
        expect(result).toBeFalse();
        done();
      }
    });
  });

  it('Modificar un héroe', (done: DoneFn) => {
    const modifiedHero = { id: 1, name: 'Modified Hero' };
    service.modificarHeroe(modifiedHero).subscribe({
      next: result => {
        expect(result).toBeTrue();
        expect(service['listadoHeroes'].find(hero => hero.id === modifiedHero.id)?.name).toEqual(modifiedHero.name);
        done();
      }
    });
  });

  it('No modificar un héroe si ya existe otro con ese nombre', (done: DoneFn) => {
    const heroToModify = HEROES[0];
    const conflictingHeroName = HEROES[1].name;
    const modifiedHero = { ...heroToModify, name: conflictingHeroName };
    service.modificarHeroe(modifiedHero).subscribe({
      next: result => {
        expect(result).toBeFalse();
        done();
      }
    });
  });

  it('Borrar heroe por id', (done: DoneFn) => {
    const heroIdToDelete = 1;
    service.borrarHeroe(heroIdToDelete).subscribe({
      next: index => {
        expect(index).toBeGreaterThan(-1);
        expect(service['listadoHeroes'].find(hero => hero.id === heroIdToDelete)).toBeFalsy();
        done();
      }
    });
  });
});
