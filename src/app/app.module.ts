import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { MaterialModule } from "./material.model";
import 'hammerjs';

import { ProductComponent } from './product/product.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    HomeComponent,
    NavComponent,
    UserComponent,
    ProductComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot([
      {path : '' , redirectTo:'home' ,pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'user',component:UserComponent},
      {path:'product',component:ProductComponent},
      {path:'customers',component:CustomersComponent},
      {path : '**' , redirectTo:'home' ,pathMatch:'full'},
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
