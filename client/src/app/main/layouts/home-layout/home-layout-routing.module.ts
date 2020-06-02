import { SignUpComponent } from '../../signup/signup.component';
import { LogInComponent } from '../../login/login.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UserprofileComponent } from '../../components/userprofile/userprofile.component';
import { BodyComponent } from '../../components/body/body.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductComponent } from '../../components/product/product.component';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';
import { ShoppingCartComponent } from '../../components/shopping-cart/shopping-cart.component';
import { ProductFilterComponent } from '../../components/product/product-filter/product-filter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from '../../components/userprofile/user.resolver';

import { AuthGuard } from '../../../auth/auth.guard';


const routes: Routes = [
    {
        path: 'header', component: HeaderComponent
    },
    {
        path: 'body', component: BodyComponent
    },
    {
        path: 'productList', component: ProductComponent,
        children: [{ path: '', component: ProductListComponent }]
    },
    {
        path: 'shoppingCart', component: ShoppingCartComponent
    },
    {
        path: 'userprofile', component: UserprofileComponent/*,canActivate:[AuthGuard]*/, resolve: { data: UserResolver}
    },
    {
        path: 'signup', component: SignUpComponent,canActivate:[AuthGuard]
    },
    {
        path: 'login', component: LogInComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/body', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule { }
