import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interface';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //inyectamos servicio en el contructor private http: HttpClient
  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuOpc() {
    return this.http.get<Componente[]>('/assets/data/menu-opc.json');
  }

  getHeroes() {
    return this.http.get<Componente[]>('/assets/data/superheroes.json')
    .pipe(
      delay( 1500 )
    );
  }


}
