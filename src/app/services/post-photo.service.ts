import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable()
export class PostPhotoService {

  constructor( private http: HttpClient) { }

  postPhotoForm( photo: Photo):Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(photo);
    console.log(body)
    return this.http.post('http://localhost:3000/photos', body,{'headers':headers});
  }

}
