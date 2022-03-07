import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';
import { PhotoInfoComponent } from './photo-info/photo-info.component';
import { SharedModule } from '../shared/shared.module';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { RouterModule } from '@angular/router';
import { GetPhotosService } from '../services/get-photos.service';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { FormsModule } from '@angular/forms';
import { PostPhotoService } from '../services/post-photo.service';
import { PutPhotoService } from '../services/put-photo.service';
import { DeletePhotoService } from '../services/delete-photo.service';



@NgModule({

  declarations: [
    PhotoListComponent,
    PhotoThumbnailComponent,
    PhotoInfoComponent,
    AddPhotoComponent,
    EditPhotoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: 'photos', component: PhotoListComponent},
      {path: 'photos/add', component: AddPhotoComponent},
      {path: 'photos/:id/edit', component: EditPhotoComponent},
      {path: 'photos/:id', component: PhotoInfoComponent}

    ]),
    FormsModule

  ],
  exports:[],
  providers:[GetPhotosService, PostPhotoService, PutPhotoService, DeletePhotoService]
})
export class PhotosModule { }
