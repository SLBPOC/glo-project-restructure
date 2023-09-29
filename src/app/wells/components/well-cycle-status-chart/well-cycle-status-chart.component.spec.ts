import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellCycleStatusChartComponent } from './well-cycle-status-chart.component';

describe('WellCycleStatusChartComponent', () => {
  let component: WellCycleStatusChartComponent;
  let fixture: ComponentFixture<WellCycleStatusChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellCycleStatusChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellCycleStatusChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
