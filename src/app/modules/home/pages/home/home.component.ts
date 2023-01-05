import { Component, OnInit } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { Product } from '../../../../interfaces/product.interface';
import { ProductsService } from '../../services/product/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProducts: Array<Product> = [];
  p: number = 1;

  constructor(private productsServices: ProductsService) { }

  ngOnInit(): void {
    this.loadAllProducts();
  }



  async loadAllProducts(): Promise<any> {
    this.listProducts = await firstValueFrom(this.productsServices.getAllProducts$());
    console.log(this.listProducts);

  }

}
