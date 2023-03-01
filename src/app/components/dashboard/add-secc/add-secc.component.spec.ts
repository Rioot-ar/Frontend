import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSeccComponent } from './add-secc.component';

describe('AddSeccComponent', () => {
  let component: AddSeccComponent;
  let fixture: ComponentFixture<AddSeccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSeccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSeccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
