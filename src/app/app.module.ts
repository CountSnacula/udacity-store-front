import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CartProductDetailComponent } from './cart/cart-product-detail/cart-product-detail.component';
import { CartUserDetailComponent } from './cart/cart-user-detail/cart-user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavBarComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    ProductItemComponent,
    ConfirmationComponent,
    CartProductDetailComponent,
    CartUserDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
