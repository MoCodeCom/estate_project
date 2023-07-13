import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLTOPComponent } from './chart-ltop.component';

describe('ChartLTOPComponent', () => {
  let component: ChartLTOPComponent;
  let fixture: ComponentFixture<ChartLTOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLTOPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartLTOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
