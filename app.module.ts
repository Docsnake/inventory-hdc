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
@NgModule({
  declarations: [AppComponent, ItemListComponent, CreateItemComponent, ModifyItemComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
