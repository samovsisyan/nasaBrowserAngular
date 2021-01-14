import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomyPictureComponent } from './astronomy-picture.component';

describe('AstronomyPictureComponent', () => {
  let component: AstronomyPictureComponent;
  let fixture: ComponentFixture<AstronomyPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomyPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomyPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
