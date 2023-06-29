import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrlandlordComponent } from './frlandlord.component';

describe('FrlandlordComponent', () => {
  let component: FrlandlordComponent;
  let fixture: ComponentFixture<FrlandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrlandlordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrlandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
