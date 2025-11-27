import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCar } from './form-car';

describe('FormCar', () => {
  let component: FormCar;
  let fixture: ComponentFixture<FormCar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
