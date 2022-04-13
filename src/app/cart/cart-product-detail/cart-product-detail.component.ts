import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductCartEntry} from "../../../models/products";

@Component({
  selector: 'app-cart-product-detail',
  templateUrl: './cart-product-detail.component.html',
  styleUrls: ['./cart-product-detail.component.css']
})
export class CartProductDetailComponent {

  @Input() productCartEntry: ProductCartEntry;
  @Output() changeEvent: EventEmitter<ProductCartEntry> =  new EventEmitter<ProductCartEntry>();

  constructor() {
    this.productCartEntry= {
      quantity: 0,
      product: {
        id: 0,
        description: "Placeholder",
        name: "Placeholder",
        price: 0,
        url: "Placeholder"
      }
    }
  }

  quantityChangeEvent(): void {
    this.changeEvent.emit(this.productCartEntry);
  }
}
