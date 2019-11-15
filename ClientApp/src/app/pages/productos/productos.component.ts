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

    productos: ProductoInterfaz[] = []; //ARREGLO TOTAL DE PRODUCTOS
    productosFiltrado: ProductoInterfaz[] = []; //ARREGLO DE PRODUCTOS A FILTRAR EN FUNCION fnObtenerProdSuperior()
    prodsup: boolean = false;  //BOOLEANO QUE OCULTA Y MUESTRA LA TABLA DE PRODUCTOS EN HTML
    cargando: boolean = true; //LOADING


    constructor(private http: HttpClient) {
        this.obtenerTodosProductos();
    }



    obtenerTodosProductos() { //MÉTODO QUE CARGA TODOS LOS PRODUCTOS
        this.cargando = true;
        this.http.get('https://computadoras-b8f1c.firebaseio.com/computadores.json')
            .subscribe((resp: ProductoInterfaz[]) => {
                this.productos = resp;
                setTimeout(() => {
                    this.cargando = false;
                }, 2000)
                this.prodsup = false;
            })
    }
    fnObtenerProdSuperior() { //MÉTODO QUE CARGA LOS PRODUCTOS FILTRADO
        this.cargando = true;
        this.prodsup = false;
        this.productos = [];
        this.http.get('https://computadoras-b8f1c.firebaseio.com/computadores.json')
            .subscribe((resp: ProductoInterfaz[]) => {
                this.productos = resp;
                console.log(this.productos.length);
                for (let i = 0; this.productos.length > i; i++) {
                    if (this.productos[i].memory_gb > 8) {
                        this.productosFiltrado.push(this.productos[i]);
                        console.log(this.productosFiltrado);
                    }
                }
                setTimeout(() => {
                    this.cargando = false;
                }, 2000)
            })
        this.productosFiltrado = [];
        this.prodsup = true;
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
