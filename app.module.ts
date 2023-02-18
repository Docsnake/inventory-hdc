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
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from './src/environment';
@NgModule({
  declarations: [AppComponent, ItemListComponent, CreateItemComponent, ModifyItemComponent],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
