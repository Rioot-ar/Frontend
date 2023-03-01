import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarSeccComponent } from './dashboar-secc.component';

describe('DashboarSeccComponent', () => {
  let component: DashboarSeccComponent;
  let fixture: ComponentFixture<DashboarSeccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboarSeccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarSeccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
