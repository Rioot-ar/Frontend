import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProyectoComponent } from './dashboard-proyecto.component';

describe('DashboardProyectoComponent', () => {
  let component: DashboardProyectoComponent;
  let fixture: ComponentFixture<DashboardProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
