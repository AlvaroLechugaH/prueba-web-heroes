import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'app-heroe-delete',
  standalone: true,
  imports: [MatDialogTitle, MatDialogActions, MatDialogContent],
  templateUrl: './heroe-delete.component.html',
  styleUrl: './heroe-delete.component.css'
})
export class HeroeDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<HeroeDeleteComponent>,
    public dialog: MatDialog
  ) { }
}
