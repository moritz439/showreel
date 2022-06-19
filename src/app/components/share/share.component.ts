import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  animations: [
    trigger('fade', [,
      transition(':enter',
        [
          query('qr-code', style({ 'opacity': 0 })),
          style({ 'opacity': 0 }),
          animate('200ms ease', style({ opacity: 1 })),
          query('qr-code', [
            style({ 'opacity': 0 }),
            animate('100ms ease-out', style({ 'opacity': 1, 'transform': 'scale(1.2)' })),
            animate('200ms ease-in', style({ 'opacity': 1, 'transform': 'scale(1)' }))
          ])
        ]),
      transition(':leave',
        animate(300, style({ opacity: 0 })))
    ])
  ]
})
export class ShareComponent implements OnInit {

  $activeConfig: Observable<any>;

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.$activeConfig = this.shareService.getConfig();
  }


  close() {
    this.shareService.close();
  }
}
