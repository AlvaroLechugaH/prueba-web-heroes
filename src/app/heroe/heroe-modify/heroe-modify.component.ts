import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Heroe } from '../../core/models/heroe.interface';
import { HeroeService } from '../../core/services/heroe/heroe.service';
import { noEmptyOrWhitespaceValidator } from '../../core/validations/no-empty-validator';
import { NotificationService } from '../../core/services/notifications/notification.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe-modify',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './heroe-modify.component.html',
  styleUrl: './heroe-modify.component.css'
})
export class HeroeModifyComponent {

  public id: number | null = 0;
  public heroe!: Heroe;
  public heroeForm!: FormGroup;

  constructor(
    private _heroeService: HeroeService,
    private _notificationService: NotificationService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    const idParam = this._activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam !== null ? +idParam : 0;

    this._heroeService.getHeroe(this.id).subscribe({
      next: (heroe: Heroe) => {
        this.heroe = heroe;
        this._crearFormulario();
      }
    });
  }

  public volverAtras(): void {
    this._router.navigate(['/heroes']);
  }

  public modificarHeroe(): void {
    this._heroeService.modificarHeroe(this.heroeForm.value).subscribe({
      next: (modificado: boolean) => {
        if (modificado) {
          this._notificationService.showMessage('El héroe se ha modificado correctamente', 'primary', 3000);
          this._router.navigate(['/heroes']);
        } else {
          this._notificationService.showMessage('Ya existe un héroe con ese nombre', 'danger', 3000);
        }
      }
    });
  }

  private _crearFormulario(): void {
    this.heroeForm = new FormGroup({
      name: new FormControl({ value: this.heroe.name, disabled: this.heroe.id === 0 }, [
        Validators.required,
        noEmptyOrWhitespaceValidator()
      ]),
      id: new FormControl(this.id)
    });

    if (this.heroe.id === 0) {
      this._notificationService.showMessage('No existe un héroe con ese id');
    }
  }

}
