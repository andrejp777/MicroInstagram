import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Album } from 'src/app/models/album';
import { GetAlbumsService } from 'src/app/services/get-albums.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {

  albums?:Album[];
  albumsToShow?:Album[];

  constructor( private getAlbums:GetAlbumsService) { }

  ngOnInit(): void {
    this.getAlbums.getAllAlbums().subscribe({
      next: albums =>{
        this.albums=albums,
        this.albumsToShow=this.albums.slice(0,25)
      },
      error: err=> console.log(`${err}`)
    })
  }

  OnPageChange(event:PageEvent){
    const startIndex=event.pageIndex*event.pageSize;
    let endIndex=startIndex+event.pageSize;
    if(this.albums)
    {
      if(this.albums.length<endIndex){
        endIndex=this.albums.length;
      }
    }
    this.albumsToShow=this.albums?.slice(startIndex,endIndex);
  }

}
