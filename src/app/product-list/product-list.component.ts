import { Component, OnInit } from '@angular/core';
import {Product, ProductCartEntry} from "../../models/products";
import {ProductService} from "../../service/ProductService";
import {take} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().pipe(take(1)).subscribe(ps => this.products = ps);
  }
}
