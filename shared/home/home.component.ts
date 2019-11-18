import { Component, OnInit } from '@angular/core';
import { ProductosComponent } from '../../pages/productos/productos.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(_productosComponent: ProductosComponent) {
        
    }

  ngOnInit() {
  }

}
