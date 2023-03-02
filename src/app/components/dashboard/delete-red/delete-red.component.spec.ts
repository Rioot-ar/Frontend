import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRedComponent } from './delete-red.component';

describe('DeleteRedComponent', () => {
  let component: DeleteRedComponent;
  let fixture: ComponentFixture<DeleteRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
