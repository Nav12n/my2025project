import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage2 } from './home-page2';

describe('HomePage2', () => {
  let component: HomePage2;
  let fixture: ComponentFixture<HomePage2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePage2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
