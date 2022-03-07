import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotoThumbnailComponent } from './album-photo-thumbnail.component';

describe('AlbumPhotoThumbnailComponent', () => {
  let component: AlbumPhotoThumbnailComponent;
  let fixture: ComponentFixture<AlbumPhotoThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPhotoThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPhotoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
