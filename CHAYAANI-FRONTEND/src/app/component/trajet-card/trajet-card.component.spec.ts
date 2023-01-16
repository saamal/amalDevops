import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetCardComponent } from './trajet-card.component';

describe('TrajetCardComponent', () => {
  let component: TrajetCardComponent;
  let fixture: ComponentFixture<TrajetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrajetCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrajetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
