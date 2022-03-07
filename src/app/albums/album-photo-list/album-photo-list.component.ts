import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { GetAlbumsService } from 'src/app/services/get-albums.service';
import { GetPhotosService } from 'src/app/services/get-photos.service';

@Component({
  selector: 'app-album-photo-list',
  templateUrl: './album-photo-list.component.html',
  styleUrls: ['./album-photo-list.component.css']
})
export class AlbumPhotoListComponent implements OnInit {

  photos? : Photo[];
  photosToShow? : Photo[];
  AlbumId?:number;
  albumName:string="";
  breakpoint: number=4;
  constructor(private getPhotos : GetPhotosService, private getAlbums: GetAlbumsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.AlbumId=parseInt(this.route.snapshot.params['id']);
    this.getPhotos.getAllPhotos().subscribe({
      next: photos=>{
        this.photos= photos.filter(photo=>photo.albumId===this.AlbumId);
        this.photosToShow=this.photos.slice(0,16);
      },
      error: err=>console.log(`${err}`)
    })
    this.getAlbums.getAlbumById(this.AlbumId).subscribe({
      next: album=>this.albumName=album.title,
      error: erro=>console.log(`${erro}`)
    })

      if(window.innerWidth <= 590){
        this.breakpoint=1;
      }
      else if(window.innerWidth<=890){
        this.breakpoint=2;
      }
      else if(window.innerWidth<=1000){
        this.breakpoint=3;
      }else{
        this.breakpoint=4;
      }

  }


  onResize(event:any) {
    if(window.innerWidth <= 590){
      this.breakpoint=1;
    }
    else if(window.innerWidth<=890){
      this.breakpoint=2;
    }
    else if(window.innerWidth<=1100){
      this.breakpoint=3;
    }else{
      this.breakpoint=4;
    }
  }

  OnPageChange(event:PageEvent){
    const startIndex=event.pageIndex*event.pageSize;
    let endIndex=startIndex+event.pageSize;
    if(this.photos)
    {
      if(this.photos.length<endIndex){
        endIndex=this.photos.length;
      }
    }
    this.photosToShow=this.photos?.slice(startIndex,endIndex);
  }

}
