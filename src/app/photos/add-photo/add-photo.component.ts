import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Photo } from 'src/app/models/photo';
import { GetAlbumsService } from 'src/app/services/get-albums.service';
import { PostPhotoService } from 'src/app/services/post-photo.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  albums?:Album[];
  photo:Photo={
    albumId:1 ,
    id:0,
    title:'',
    url:'',
    thumbnailUrl:''
  };
  constructor(private getAlbums:GetAlbumsService, private postPhoto: PostPhotoService, private router: Router) { }

  ngOnInit(): void {
    this.getAlbums.getAllAlbums().subscribe({
      next: albums=>this.albums=albums,
      error: err=>console.log(`${err}`)
    })
  }
  save(newPhoto: NgForm): void {
    this.postPhoto.postPhotoForm(this.photo).subscribe(
     (photo : Photo)=>console.log(photo)
    )
    this.router.navigate(['/albums',this.photo.albumId]);

  }

}
