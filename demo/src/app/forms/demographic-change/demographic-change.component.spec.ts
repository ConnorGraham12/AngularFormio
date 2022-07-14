import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicChangeComponent } from './demographic-change.component';

describe('DemographicChangeComponent', () => {
  let component: DemographicChangeComponent;
  let fixture: ComponentFixture<DemographicChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemographicChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
