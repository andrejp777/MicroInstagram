import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class DeletePhotoService {

  constructor(private http: HttpClient) { }

  deletePhoto(photo: Photo):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/photos/${photo.id}`);
  }
}
