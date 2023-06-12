import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPorpertyComponent } from './edit-porperty.component';

describe('EditPorpertyComponent', () => {
  let component: EditPorpertyComponent;
  let fixture: ComponentFixture<EditPorpertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPorpertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPorpertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
