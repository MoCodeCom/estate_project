import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantlstComponent } from './tenantlst.component';

describe('TenantlstComponent', () => {
  let component: TenantlstComponent;
  let fixture: ComponentFixture<TenantlstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantlstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantlstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
