import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitIconComponent } from './submit-icon.component';

describe('SubmitIconComponent', () => {
  let component: SubmitIconComponent;
  let fixture: ComponentFixture<SubmitIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
