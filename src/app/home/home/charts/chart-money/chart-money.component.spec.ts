import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMoneyComponent } from './chart-money.component';

describe('ChartMoneyComponent', () => {
  let component: ChartMoneyComponent;
  let fixture: ComponentFixture<ChartMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
