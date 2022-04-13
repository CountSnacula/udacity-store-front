import {Injectable} from "@angular/core";
import {Product, ProductCartEntry} from "../models/products";

@Injectable({
  providedIn: "root"
})
export class StorageService {

  public addToStorage(product: Product, quantity: number) {
    const cart = this.getCart();
    const pIndex = cart.findIndex(pce => pce.product.id === product.id);
    if (pIndex === -1) {
      cart.push({
        product: product,
        quantity: quantity,
      })
    } else {
      const old = cart[pIndex];
      old.quantity = old.quantity + quantity;
    }

    this.store(cart)
  }

  public getCart(): ProductCartEntry[] {
    const cartJson = localStorage.getItem("cart");
    if (cartJson === null) {
      return [];
    }

    return JSON.parse(cartJson);
  }

  public removeFromCart(productCartEntry: ProductCartEntry) {
    const cart = this.getCart();
    const index = cart.findIndex(pce => pce.product.id === productCartEntry.product.id);
    if (index > -1) {
      cart.splice(index, 1);
    }
    this.store(cart);
  }

  private store(cart: ProductCartEntry[]) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
