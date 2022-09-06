import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppedStatusComponent } from './stepped-status.component';

describe('SteppedStatusComponent', () => {
  let component: SteppedStatusComponent;
  let fixture: ComponentFixture<SteppedStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteppedStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
