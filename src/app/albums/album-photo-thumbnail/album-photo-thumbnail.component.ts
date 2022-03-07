import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-album-photo-thumbnail',
  templateUrl: './album-photo-thumbnail.component.html',
  styleUrls: ['./album-photo-thumbnail.component.css']
})
export class AlbumPhotoThumbnailComponent implements OnInit {
  @Input() photoCard?:Photo;
  title:string=" ";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    if(this.photoCard?.title.length){
      if(this.photoCard.title.length>40){
        this.title=this.photoCard.title.slice(0,27)+"...";
      }else
        this.title=this.photoCard.title;
  }
  }

}
