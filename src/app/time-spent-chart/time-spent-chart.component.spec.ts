import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpentChartComponent } from './time-spent-chart.component';

describe('TimeSpentChartComponent', () => {
  let component: TimeSpentChartComponent;
  let fixture: ComponentFixture<TimeSpentChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSpentChartComponent]
    });
    fixture = TestBed.createComponent(TimeSpentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
