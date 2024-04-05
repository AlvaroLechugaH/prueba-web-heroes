import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Heroe } from '../../../core/models/heroe.interface';
import { CapitalizarPrimeraLetraPipe } from '../../../core/pipes/capitalizar-primera-letra.pipe';

@Component({
  selector: 'heroe-item',
  standalone: true,
  imports: [CapitalizarPrimeraLetraPipe],
  templateUrl: './heroe-item.component.html',
  styleUrl: './heroe-item.component.css'
})
export class HeroeItemComponent {

  @Input() public heroe!: Heroe;
  
  @Output() modifyHeroe = new EventEmitter<number>();
  @Output() deleteHeroe = new EventEmitter<number>();

  public edit(): void {
    this.modifyHeroe.emit(this.heroe.id);
  }

  public delete(): void {
    this.deleteHeroe.emit(this.heroe.id);
  }

}
