import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEduComponent } from './dashboard-edu.component';

describe('DashboardEduComponent', () => {
  let component: DashboardEduComponent;
  let fixture: ComponentFixture<DashboardEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
