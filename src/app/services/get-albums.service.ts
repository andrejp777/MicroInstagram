import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable()
export class GetAlbumsService {

  constructor(private http: HttpClient) { }

  getAllAlbums():Observable<Album[]>{
    return this.http.get<Album[]>('http://jsonplaceholder.typicode.com/albums');
  }
  getAlbumById(id:number):Observable<Album>{
    return this.http.get<Album>(`http://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
