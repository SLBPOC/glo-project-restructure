import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellModeOfOperationChartComponent } from './well-mode-of-operation-chart.component';

describe('WellModeOfOperationChartComponent', () => {
  let component: WellModeOfOperationChartComponent;
  let fixture: ComponentFixture<WellModeOfOperationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellModeOfOperationChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellModeOfOperationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
