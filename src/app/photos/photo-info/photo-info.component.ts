import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { DeletePhotoService } from 'src/app/services/delete-photo.service';
import { GetPhotosService } from 'src/app/services/get-photos.service';

@Component({
  selector: 'app-photo-info',
  templateUrl: './photo-info.component.html',
  styleUrls: ['./photo-info.component.css']
})
export class PhotoInfoComponent implements OnInit {
  photo? : Photo;
  photos?:Photo[];
  constructor(private getPhoto:GetPhotosService, private dltPhoto:DeletePhotoService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let photoID:number=parseInt(this.route.snapshot.params['id']);
    this.getPhoto.getPhotoById(photoID).subscribe({
      next: photo=>this.photo=photo,
      error: err=>console.log(`${err}`)
    })
    this.getPhoto.getAllPhotos().subscribe({
      next: photos=>this.photos=photos,
      error: err=> console.log(`${err}`)
    })
  }
  deletePhotoEvent():void{
    if(this.photo && this.photos){
      this.dltPhoto.deletePhoto(this.photo).subscribe({
        next: ok=>console.log(`Photo deleted!`),
        error: err=>console.log(`${err}`)
      })
      this.router.navigate(['/photos']);
    }
  }
}
