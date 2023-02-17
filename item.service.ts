// item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private API_URL = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) {}
  getItems(): Observable<Item[]> {
    console.log('getItems')
    return this.http.get<Item[]>(this.API_URL);
  }
  createItem(item: any): Observable<Item[]> {
    console.log('createItem')
    return this.http.post<Item[]>(this.API_URL, item);
  }
  deleteItem(itemId: any): Observable<Item[]> {
    console.log('deleteItem')
    let URL = this.API_URL+'/delete/'+itemId;
    return this.http.delete<Item[]>(URL);
  }
  modifyItem(item: any): Observable<Item[]> {
    console.log('modifyItem')
    let URL = this.API_URL+'/modify/'+item.id;
    return this.http.put<Item[]>(URL, item);
  }
}
