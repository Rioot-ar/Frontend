import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAcercadeComponent } from './dashboard-acercade.component';

describe('DashboardAcercadeComponent', () => {
  let component: DashboardAcercadeComponent;
  let fixture: ComponentFixture<DashboardAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAcercadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
