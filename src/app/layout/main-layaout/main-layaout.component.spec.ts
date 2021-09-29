import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayaoutComponent } from './main-layaout.component';

describe('MainLayaoutComponent', () => {
  let component: MainLayaoutComponent;
  let fixture: ComponentFixture<MainLayaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayaoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
