import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.css']
})
export class PhotoThumbnailComponent implements OnInit {
  @Input() photoCard?:Photo;
  title:string=" ";

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    if(this.photoCard?.title.length){
      if(this.photoCard.title.length>30){
        this.title=this.photoCard.title.slice(0,27)+"...";
      }else
        this.title=this.photoCard.title;
  }
  }

}
