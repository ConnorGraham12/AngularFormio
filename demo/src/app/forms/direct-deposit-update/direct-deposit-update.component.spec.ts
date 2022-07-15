import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDepositUpdateComponent } from './direct-deposit-update.component';

describe('DirectDepositUpdateComponent', () => {
  let component: DirectDepositUpdateComponent;
  let fixture: ComponentFixture<DirectDepositUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectDepositUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectDepositUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
