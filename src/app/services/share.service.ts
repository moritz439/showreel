import { Injectable, OnInit } from '@angular/core';
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

  url: string; 
  activeConfigSubject: Subject<ShareConfig> = new Subject();

  constructor() { }

  shareTrack(track: Track) {    
    this.activeConfigSubject.next({
      header: track.name,
      url: window.location.origin + '/' + track.name
    })
    
  }

  sharePage() {
    this.activeConfigSubject.next({
      url:  window.location.origin
    })
  }

  getConfig() {
    return this.activeConfigSubject.asObservable();
  }

  close() {
    this.activeConfigSubject.next(null);
  }
}
