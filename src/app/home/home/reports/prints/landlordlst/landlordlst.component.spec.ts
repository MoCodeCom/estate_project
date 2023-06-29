import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordlstComponent } from './landlordlst.component';

describe('LandlordlstComponent', () => {
  let component: LandlordlstComponent;
  let fixture: ComponentFixture<LandlordlstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordlstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlordlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
