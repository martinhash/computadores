import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterfaz } from '../../interfaces/productos';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    productos: ProductoInterfaz[] = [];
    prodsup: boolean = true;


    constructor(private http: HttpClient) {
        this.obtenerProductos();
    }



    obtenerProductos() {
        this.http.get('https://computadoras-b8f1c.firebaseio.com/computadores.json')
            .subscribe((resp: ProductoInterfaz[]) => {
                this.productos = resp;
            })
    }

    fnModalHardDrive(producto) {
        Swal.fire({
            title: 'Procesador: ' + producto.hard_drive.brand + ' ' + producto.hard_drive.model,
            icon: 'info',
            html:
                '<b>Compatibilidad:</b> ' + producto.hard_drive.compatibility +
                '<br/>' +
                '<b>Peso :</b> ' + producto.hard_drive.weight_grams + ' gramos'
        })
    }
  ngOnInit() {
  }

}
