import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSkillsComponent } from './dashboard-skills.component';

describe('DashboardSkillsComponent', () => {
  let component: DashboardSkillsComponent;
  let fixture: ComponentFixture<DashboardSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
