import { BrowserModule } from '@angular/platform-browser';
import { HomeLayoutComponent } from './main/layouts/home-layout/home-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { UserService } from './shared/user.service';
import { AuthService } from './shared/auth.service';
import { ProductService } from './shared/product.service';
import { MessengerService } from './shared/messenger.service';


import { UserResolver } from './main/components/userprofile/user.resolver';
import { AuthGuard } from './auth/auth.guard';
/*import { AuthInterceptor } from './auth/auth.interceptor';*/

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './admin/components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LogInComponent } from './main/login/login.component';
import { SignUpComponent } from './main/signup/signup.component';
import { ProductComponent } from './main/components/product/product.component';
import { ProductListComponent } from './main/components/product/product-list/product-list.component';
import { ProductFilterComponent } from './main/components/product/product-filter/product-filter.component';
import { ProductCardComponent } from './main/components/product/product-list/product-card/product-card.component';
import { ShoppingCartComponent } from './main/components/shopping-cart/shopping-cart.component';
import { ShoppingItemComponent } from './main/components/shopping-cart/shopping-item/shopping-item.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { UserprofileComponent } from './main/components/userprofile/userprofile.component';
import { TableListComponent } from './admin/table-list/table-list.component';
import { TypographyComponent } from './admin/typography/typography.component';
import { IconsComponent } from './admin/icons/icons.component';
import { MapsComponent } from './admin/maps/maps.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { UpgradeComponent } from './admin/upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),*/
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    /*AngularFireAuth*/
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeLayoutComponent
    /*SignUpComponent,
    LogInComponent*/
  ],
  providers: [/*{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }*/AuthGuard,AngularFireAuth,AuthService,UserService,ProductService,MessengerService,UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
