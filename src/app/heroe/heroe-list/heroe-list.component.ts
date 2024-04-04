import { Component, OnInit } from '@angular/core';
import { HeroeItemComponent } from '../../shared/components/heroe-item/heroe-item.component';
import { Heroe } from '../../core/models/heroe.interface';
import { Router } from '@angular/router';
import { HeroeService } from '../../core/services/heroe/heroe.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroe-list',
  standalone: true,
  imports: [FormsModule, HeroeItemComponent, MatProgressSpinnerModule],
  templateUrl: './heroe-list.component.html',
  styleUrl: './heroe-list.component.css'
})
export class HeroeListComponent implements OnInit {

  public loading: boolean = true;
  public searchText: string = '';

  public heroes: Heroe[] = [];
  public allHeroes: Heroe[] = [];

  constructor(
    private _heroeService: HeroeService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this._heroeService.getListadoHeroes().subscribe({
        next: (listadoHeroes: Heroe[]) => {
          this.allHeroes = listadoHeroes;
          this.heroes = listadoHeroes;
          this.loading = false;
        }
      });
    }, 2000);
  }

  public filtrarListadoHeroe(): void {
    if (this.searchText.trim() === '') {
      this.heroes = this.allHeroes;
    } else {
      this.heroes = this.allHeroes.filter((heroe: Heroe) =>
        heroe.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

  public clickNewHeroe(): void {
    this._router.navigate(['/heroes/create']);
  }

  public editHeroe(id: number): void {
    this._router.navigate([`/heroes/modify/${id}`]);
  }

  public deleteHeroe(id: number): void {

  }

}
