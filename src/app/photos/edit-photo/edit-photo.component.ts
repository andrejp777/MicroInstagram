import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Photo } from 'src/app/models/photo';
import { GetAlbumsService } from 'src/app/services/get-albums.service';
import { GetPhotosService } from 'src/app/services/get-photos.service';
import { PutPhotoService } from 'src/app/services/put-photo.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {
  albums?:Album[];
  photo:Photo={
    albumId:1 ,
    id:0,
    title:'',
    url:'',
    thumbnailUrl:''
  };
  albumName:string="test";

  constructor(private getAlbums:GetAlbumsService,private getPhoto:GetPhotosService,private putPhoto: PutPhotoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAlbums.getAllAlbums().subscribe({
      next: albums=>this.albums=albums,
      error: err=>console.log(`${err}`)
    })
    let photoID:number=parseInt(this.route.snapshot.params['id']);
    this.getPhoto.getPhotoById(photoID).subscribe({
      next:photo=>this.photo=photo,
      error: err=>console.log(`${err}`)
    })
    if(this.photo){
      this.getAlbums.getAlbumById(this.photo?.albumId).subscribe({
        next: album=>this.albumName=album.title,
        error: err=> console.log(`${err}`)})
    }
  }
  save(newPhoto: NgForm):void{
    this.putPhoto.putPhotoForm(this.photo).subscribe(
      (photo : Photo)=>console.log(photo)
     )
    console.log('Saved: ' + JSON.stringify(newPhoto.value));
    this.router.navigate(['/photos',this.photo.id])
  }
}
