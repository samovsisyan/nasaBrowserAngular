import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNewPlanetComponent } from './submit-new-planet.component';

describe('SubmitNewPlanetComponent', () => {
  let component: SubmitNewPlanetComponent;
  let fixture: ComponentFixture<SubmitNewPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitNewPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitNewPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
