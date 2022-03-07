import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Photo } from 'src/app/models/photo';
import { GetPhotosService } from 'src/app/services/get-photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos? : Photo[];
  photosToShow? : Photo[];
  breakpoint: number= 4;
  constructor(private getPhotos: GetPhotosService) { }


  ngOnInit(): void {
    this.getPhotos.getAllPhotos().subscribe({
      next : photos => {
        this.photos=photos,
        this.photosToShow = this.photos?.slice(0,16)
      },
      error : err=> console.log(`${err}`)
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
