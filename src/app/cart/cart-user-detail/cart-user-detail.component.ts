import {Component} from '@angular/core';
import {User} from "../../../models/user";

@Component({
  selector: 'app-cart-user-detail',
  templateUrl: './cart-user-detail.component.html',
  styleUrls: ['./cart-user-detail.component.css']
})
export class CartUserDetailComponent {

  user: User;

  constructor() {
    this.user = {
      fullName: "",
      address: "",
      cardNumber: "",
    };
  }

}
