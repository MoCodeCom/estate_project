import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotherComponent } from './frother.component';

describe('FrotherComponent', () => {
  let component: FrotherComponent;
  let fixture: ComponentFixture<FrotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrotherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
