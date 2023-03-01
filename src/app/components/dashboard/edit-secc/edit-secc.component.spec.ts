import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeccComponent } from './edit-secc.component';

describe('EditSeccComponent', () => {
  let component: EditSeccComponent;
  let fixture: ComponentFixture<EditSeccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSeccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSeccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
