import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentlifecycleComponent } from './parentlifecycle.component';

describe('ParentlifecycleComponent', () => {
  let component: ParentlifecycleComponent;
  let fixture: ComponentFixture<ParentlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentlifecycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
