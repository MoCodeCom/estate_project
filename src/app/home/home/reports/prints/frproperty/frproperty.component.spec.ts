import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrpropertyComponent } from './frproperty.component';

describe('FrpropertyComponent', () => {
  let component: FrpropertyComponent;
  let fixture: ComponentFixture<FrpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrpropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
