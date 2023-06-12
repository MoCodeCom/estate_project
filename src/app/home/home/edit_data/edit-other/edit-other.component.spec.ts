import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtherComponent } from './edit-other.component';

describe('EditOtherComponent', () => {
  let component: EditOtherComponent;
  let fixture: ComponentFixture<EditOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
