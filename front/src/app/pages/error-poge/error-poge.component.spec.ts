import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPogeComponent } from './error-poge.component';

describe('ErrorPogeComponent', () => {
  let component: ErrorPogeComponent;
  let fixture: ComponentFixture<ErrorPogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
