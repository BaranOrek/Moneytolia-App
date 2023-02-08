import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiologComponent } from './form-diolog.component';

describe('FormDiologComponent', () => {
  let component: FormDiologComponent;
  let fixture: ComponentFixture<FormDiologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDiologComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
