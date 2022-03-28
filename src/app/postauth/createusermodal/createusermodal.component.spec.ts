import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateusermodalComponent } from './createusermodal.component';

describe('CreateusermodalComponent', () => {
  let component: CreateusermodalComponent;
  let fixture: ComponentFixture<CreateusermodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateusermodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateusermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
