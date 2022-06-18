import { Component, Input, OnInit } from '@angular/core';
import { Style, Track } from 'src/app/models';

@Component({
  selector: 'app-track-preview',
  templateUrl: './track-preview.component.html',
  styleUrls: ['./track-preview.component.scss']
})
export class TrackPreviewComponent implements OnInit {

  @Input() track: Track;
  @Input() showcase: boolean = false;
  styleList = Style;

  constructor() { }

  ngOnInit(): void {
  }

  play() {
    
  }

}
