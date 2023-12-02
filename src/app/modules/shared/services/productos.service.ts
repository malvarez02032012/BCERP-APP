import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  listarProductos(Id_Empresa:number | null, nombre_Comercial?:string | null, nombre_corto?:string | null)
  {
    let api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InNhIiwibmJmIjoxNzAxMjc1NjkxLCJleHAiOjE3MDY0MzU2OTEsImlhdCI6MTcwMTI3NTY5MSwiaXNzIjoiaHR0cHM6Ly93d3cuZGF5YnJpdGFyLnNpdGUiLCJhdWQiOiJodHRwczovL3d3dy5kYXlicml0YXIuc2l0ZSJ9.PvDdCr2sDkV_GC9wm2ev1ZbDrXOuaNJTzBeetnwYc0Y";


    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });
      var requestOptions = {
        method: 'GET',
        headers: headers,
      };

    return this.http.get(`${environment.apiUrl}/Establecimiento/Listar?id_Empresa=${Id_Empresa==null? '':'='+Id_Empresa}&nombreComercial${nombre_Comercial==null? '':'='+nombre_Comercial}&nombrecorto${nombre_corto==null? '':'='+nombre_corto}`,requestOptions);
  }
}
