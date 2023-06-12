import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOtherComponent } from './view-other.component';

describe('ViewOtherComponent', () => {
  let component: ViewOtherComponent;
  let fixture: ComponentFixture<ViewOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
