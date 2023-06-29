import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertylstComponent } from './propertylst.component';

describe('PropertylstComponent', () => {
  let component: PropertylstComponent;
  let fixture: ComponentFixture<PropertylstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertylstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertylstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
