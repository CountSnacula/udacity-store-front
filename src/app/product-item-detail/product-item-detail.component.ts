import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductCartEntry} from "../../models/products";
import {ActivatedRoute} from "@angular/router";
import {take} from "rxjs";
import {ProductService} from "../../service/ProductService";
import {StorageService} from "../../service/StorageService";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product;
  quantity: number;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService,
              private storageService: StorageService) {
    this.product = {
      id: 0,
      description: "Placeholder",
      name: "Placeholder",
      price: 0,
      url: "Placeholder"
    }
    this.quantity = 1;
  }

  ngOnInit(): void {
    const pId = this.activeRoute.snapshot.paramMap.get("id");
    if (pId === null) {
      throw new Error("product is is not present")
    }
    this.productService.getProduct(parseInt(pId))
      .pipe(take(1))
      .subscribe(p => this.product = p);
  }

  addToCart() {
    this.storageService.addToStorage(this.product, this.quantity);
  }
}
