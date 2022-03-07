import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PutPhotoService {

  constructor(private http : HttpClient) { }

  putPhotoForm( photo: Photo):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(photo);
    console.log(body)
    return this.http.put(`http://localhost:3000/photos/${photo.id}`, body,{'headers':headers});
  }

}
