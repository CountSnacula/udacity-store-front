import {Component, OnInit} from '@angular/core';
import {ProductCartEntry} from "../../models/products";
import {StorageService} from "../../service/StorageService";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productCartEntries: ProductCartEntry[];

  constructor(private storageService: StorageService) {
    this.productCartEntries = []
  }

  ngOnInit(): void {
    this.productCartEntries = this.storageService.getCart();
  }

  changeProductEntries(event: ProductCartEntry): void {
    if (event.quantity > 0) {
      return;
    }

    this.storageService.removeFromCart(event);
    this.productCartEntries = this.storageService.getCart();
  }

  getTotal(): number {
    return this.productCartEntries.reduce((pre, cur) => pre + cur.quantity * cur.product.price, 0);
  }
}
