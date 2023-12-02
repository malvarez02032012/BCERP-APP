import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { ProductosService } from 'src/app/modules/shared/services/productos.service';
import Swal from 'sweetalert2';
import { Establecimiento } from 'src/app/modules/modelos/establecimiento';
import {
  MatDialog,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { ProductoDetalleComponent } from 'src/app/modules/productos/producto-detalle/producto-detalle.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule],
})
export class HomeComponent implements OnInit {

  Establecimientos!: Establecimiento[];

  indiceActual = 0;
  imagenes = [
    './assets/imagenes/Portada_LP_Verano.jpg',
    './assets/imagenes/Portada_LP_Combos.jpg',
  ];

  nombreCorto?: string;

  constructor(private service: ProductosService, public dialogProductoDetalle: MatDialog) {
  }
  ngOnInit(): void {
    this.nombreCorto = sessionStorage.getItem('nombreCorto') ?? '';
    this.listarProductos();
  }

  listarProductos() {
    this.service.listarProductos(null, null, this.nombreCorto).subscribe({
      next: (resp: any) => {
        this.Establecimientos = resp.datos;
      },
      error: err => {
        Swal.fire({
          title: 'Error!',
          text: err.errors,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
    });
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialogProductoDetalle.open(ProductoDetalleComponent, {
      height: '705px',
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
}
