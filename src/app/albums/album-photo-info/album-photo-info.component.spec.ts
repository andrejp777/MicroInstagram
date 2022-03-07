import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotoInfoComponent } from './album-photo-info.component';

describe('AlbumPhotoInfoComponent', () => {
  let component: AlbumPhotoInfoComponent;
  let fixture: ComponentFixture<AlbumPhotoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPhotoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPhotoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
