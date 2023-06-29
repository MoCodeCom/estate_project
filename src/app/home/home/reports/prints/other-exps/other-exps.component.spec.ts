import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherExpsComponent } from './other-exps.component';

describe('OtherExpsComponent', () => {
  let component: OtherExpsComponent;
  let fixture: ComponentFixture<OtherExpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherExpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherExpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
