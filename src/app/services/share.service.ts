import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Track } from '../models';

export interface ShareConfig {
  header?: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ShareService {


  activeConfigSubject: Subject<ShareConfig> = new Subject();
  $isOpen: Observable<boolean>;

  constructor(@Inject(DOCUMENT) private _document) {
    this.activeConfigSubject.pipe(map(v => (!!v))).subscribe(isOpen => {
      this._document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    });
  }

  shareTrack(track: Track) {
    this.activeConfigSubject.next({
      header: track.name,
      url: window.location.origin + '/' + track.name
    })
  }

  sharePage() {
    this.activeConfigSubject.next({
      header: 'Demo Beats',
      url: window.location.origin
    })
  }

  getConfig() {
    return this.activeConfigSubject.asObservable();
  }

  close() {
    this.activeConfigSubject.next(null);
  }
}
