import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPreviewComponent } from './track-preview.component';

describe('TrackPreviewComponent', () => {
  let component: TrackPreviewComponent;
  let fixture: ComponentFixture<TrackPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
