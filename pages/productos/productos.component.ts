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
        this.obtenerTodosProductos()
    }

   public obtenerTodosProductos() { //MÉTODO QUE CARGA TODOS LOS PRODUCTOS
        this.productosFiltrado = [];
        this.prodsup = false;
        this.http.get('https://computadoras-b8f1c.firebaseio.com/computadores.json')
            .subscribe((resp: ProductoInterfaz[]) => {
                this.productos = resp;
                setTimeout(() => {
                    this.cargando = false;
                }, 2000)
            })
    }
    fnObtenerProdSuperior() { //MÉTODO QUE CARGA LOS PRODUCTOS FILTRADO
        this.productos.filter(element => {
            if (element.memory_gb > 8) {
                this.productosFiltrado.push(element);
            }
        })
        this.prodsup = true;
    }
    fnModalHardDrive(producto) {
        Swal.fire({
            title: producto.name,
            icon: 'info',
            html:
                '<b>Marca:</b> ' + producto.hard_drive.brand +
                '<br/>' +
                '<b>Modelo:</b> ' + producto.hard_drive.model +
                '<br/>' +
                '<b>Compatibilidad:</b> ' + producto.hard_drive.compatibility +
                '<br/>' +
                '<b>Peso :</b> ' + producto.hard_drive.weight_grams + ' gramos'
        })
    }
    ngOnInit() {
    }

}
