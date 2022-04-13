import {Component, Input} from '@angular/core';
import {Product} from "../../models/products";
import {StorageService} from "../../service/StorageService";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product;
  quantity: number;

  constructor(private storageService: StorageService) {
    this.quantity = 1;
    this.product = {
      id: 0,
      description: "Placeholder",
      name: "Placeholder",
      price: 0,
      url: "Placeholder"
    }
  }

  addToCart() {
    this.storageService.addToStorage(this.product, this.quantity)
  }

}
