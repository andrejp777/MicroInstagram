import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPhotoListComponent } from './album-photo-list/album-photo-list.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumPhotoInfoComponent } from './album-photo-info/album-photo-info.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { GetAlbumsService } from '../services/get-albums.service';
import { AlbumPhotoThumbnailComponent } from './album-photo-thumbnail/album-photo-thumbnail.component';



@NgModule({
  declarations: [
    AlbumPhotoListComponent,
    AlbumsListComponent,
    AlbumPhotoInfoComponent,
    AlbumPhotoThumbnailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'albums', component: AlbumsListComponent},
      {path: 'albums/:id', component: AlbumPhotoListComponent},
      {path: 'albums/:albumId/photos/:id', component: AlbumPhotoInfoComponent}
    ])
  ],
  providers:[GetAlbumsService]
})
export class AlbumsModule { }
