import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeroeService } from '../../core/services/heroe/heroe.service';
import { noEmptyOrWhitespaceValidator } from '../../core/validations/no-empty-validator';
import { Router } from '@angular/router';
import { NotificationService } from '../../core/services/notifications/notification.service';

@Component({
  selector: 'app-heroe-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './heroe-create.component.html',
  styleUrl: './heroe-create.component.css'
})
export class HeroeCreateComponent implements OnInit {

  public heroeForm!: FormGroup;

  constructor(
    private _heroeService: HeroeService,
    private _notificationService: NotificationService,
    private _router: Router,
  ) { }

  public ngOnInit(): void {
    this.heroeForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        noEmptyOrWhitespaceValidator()
      ])
    });
  }

  public volverAtras(): void {
    this._router.navigate(['/heroes']);
  }

  public crearHeroe(): void {
    this._heroeService.insertarHeroe(this.heroeForm.value.name).subscribe({
      next: (insertado: boolean) => {
        if (insertado) {
          this._notificationService.showMessage('El héroe se ha insertado correctamente', 'primary', 3000);
          this._router.navigate(['/heroes']);
        } else {
          this._notificationService.showMessage('Ya existe un héroe con ese nombre', 'danger', 3000);
        }
      }
    });
  }

}
