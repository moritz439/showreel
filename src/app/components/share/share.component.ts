import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
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
