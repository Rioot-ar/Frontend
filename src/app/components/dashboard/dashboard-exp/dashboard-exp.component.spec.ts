import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExpComponent } from './dashboard-exp.component';

describe('DashboardExpComponent', () => {
  let component: DashboardExpComponent;
  let fixture: ComponentFixture<DashboardExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
