import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoneyComponent } from './view-money.component';

describe('ViewMoneyComponent', () => {
  let component: ViewMoneyComponent;
  let fixture: ComponentFixture<ViewMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
