import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable()
export class GetPhotosService {

  constructor(private http: HttpClient) { }

  getAllPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>('http://localhost:3000/photos');
  }

  getPhotoById(id:number):Observable<Photo>{
    return this.http.get<Photo>(`http://localhost:3000/photos/${id}`);
  }
}
