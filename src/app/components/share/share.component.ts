import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ShareConfig, ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  animations: [
    trigger('fade', [,
      transition(':enter',
        [
          query('qr-code, span, .header', style({ 'opacity': 0 })),
          style({ 'opacity': 0 }),
          animate('100ms ease', style({ opacity: 1 })),
          query('qr-code, span, .header', [
            style({ 'opacity': 0 }),
            animate('100ms ease', style({ 'opacity': .4, 'transform': 'scale(1.2)' })),
            animate('300ms ease', style({ 'opacity': 1, 'transform': 'scale(1)' }))
          ])
        ]),
      transition(':leave',
        animate(300, style({ opacity: 0 })))
    ])
  ]
})
export class ShareComponent implements OnInit {

  $activeConfig: Observable<ShareConfig>;

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.$activeConfig = this.shareService.getConfig();
  }

  close() {
    this.shareService.close();
  }
}
