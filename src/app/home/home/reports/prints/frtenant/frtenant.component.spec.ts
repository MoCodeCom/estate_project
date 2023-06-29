import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrtenantComponent } from './frtenant.component';

describe('FrtenantComponent', () => {
  let component: FrtenantComponent;
  let fixture: ComponentFixture<FrtenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrtenantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrtenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
