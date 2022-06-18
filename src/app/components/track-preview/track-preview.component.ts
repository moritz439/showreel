import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-preview',
  templateUrl: './track-preview.component.html',
  styleUrls: ['./track-preview.component.scss']
})
export class TrackPreviewComponent implements OnInit {

  @Input() trackSource: string;

  constructor() { }

  ngOnInit(): void {
  }

}
