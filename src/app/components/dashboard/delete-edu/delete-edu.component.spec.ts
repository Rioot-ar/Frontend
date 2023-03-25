import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEduComponent } from './delete-edu.component';

describe('DeleteEduComponent', () => {
  let component: DeleteEduComponent;
  let fixture: ComponentFixture<DeleteEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
