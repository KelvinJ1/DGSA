import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetComponent } from './carnet.component';

describe('CarnetComponent', () => {
  let component: CarnetComponent;
  let fixture: ComponentFixture<CarnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
