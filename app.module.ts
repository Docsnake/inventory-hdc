// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list.component';
import { ItemService } from './item.service';
import { CreateItemComponent } from './src/app/create-item/create-item.component';
import { FormsModule } from '@angular/forms';
import { ModifyItemComponent } from './src/app/modify-item/modify-item.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environment';
@NgModule({
  declarations: [AppComponent, ItemListComponent, CreateItemComponent, ModifyItemComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule,AngularFireModule.initializeApp({
    apiKey: "AIzaSyAPw6HZgEb5u10DTGjiRHhgBWhPcgHFqVY",
    authDomain: "api-inventory-abb3a.firebaseapp.com",
    databaseURL: "https://api-inventory-abb3a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "api-inventory-abb3a",
    storageBucket: "api-inventory-abb3a.appspot.com",
    messagingSenderId: "761314074079",
    appId: "1:761314074079:web:25e4730b9dec207c19386a",
    measurementId: "G-QQDQJSTHE0"
  })],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
