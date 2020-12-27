import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouserlBasicComponent } from './carouserl-basic.component';

describe('CarouserlBasicComponent', () => {
  let component: CarouserlBasicComponent;
  let fixture: ComponentFixture<CarouserlBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouserlBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouserlBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
