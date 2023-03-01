import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSeccComponent } from './delete-secc.component';

describe('DeleteSeccComponent', () => {
  let component: DeleteSeccComponent;
  let fixture: ComponentFixture<DeleteSeccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSeccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSeccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
