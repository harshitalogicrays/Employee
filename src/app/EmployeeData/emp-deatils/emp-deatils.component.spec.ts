import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDeatilsComponent } from './emp-deatils.component';

describe('EmpDeatilsComponent', () => {
  let component: EmpDeatilsComponent;
  let fixture: ComponentFixture<EmpDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
