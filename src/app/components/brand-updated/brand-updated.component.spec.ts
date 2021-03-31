import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandUpdatedComponent } from './brand-updated.component';

describe('BrandUpdatedComponent', () => {
  let component: BrandUpdatedComponent;
  let fixture: ComponentFixture<BrandUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandUpdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
