import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styles: [
  ],
  standalone:true,
  imports: [ MaterialModule],
})
export class ProductoDetalleComponent implements OnInit{

  Cantidad:number =0;
  constructor(){

  }

  ngOnInit(): void {
  }

}
