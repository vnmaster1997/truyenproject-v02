import { SignUpComponent } from '../../signup/signup.component';
import { LogInComponent } from '../../login/login.component';
import { ProductComponent } from '../../components/product/product.component';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';
import { ProductFilterComponent } from '../../components/product/product-filter/product-filter.component';
import { ProductCardComponent } from '../../components/product/product-list/product-card/product-card.component';

import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from '../../components/shopping-cart/shopping-item/shopping-item.component';

import { HeaderComponent } from '../../components/header/header.component';
import { BodyComponent } from '../../components/body/body.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UserprofileComponent } from '../../components/userprofile/userprofile.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';


@NgModule({
  declarations: [LogInComponent, SignUpComponent,HeaderComponent,BodyComponent,FooterComponent,UserprofileComponent,
  ProductComponent,ProductListComponent,ProductCardComponent,ProductFilterComponent,ShoppingCartComponent,ShoppingItemComponent],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeLayoutModule { }
