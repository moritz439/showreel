import { Injectable } from '@angular/core';
import { Style, Track } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private tracks = [];
  currentAudio: HTMLAudioElement;
  currentSource: string;
  isPaused = true;

  constructor() {
    for (var i = 1; i <= 10; i++) {
      this.tracks.push(
        {
          name: 'test',
          styles: [Style.aggressive, Style.chill, Style.dark],
          source: '../assets/tracks/ice.mp3',
        }
      )
    }
  }

  getTracks(): Track[] {
    return this.tracks;
  }

  getTrackByName(name: string): Track {
    return this.tracks.find(track => track.name === name);
  }

  play(name: string) {
    const source = this.getTrackByName(name).source;
    if (this.isPaused) {
      if (source !== this.currentSource) {
        this.currentSource = source;
        this.currentAudio = new Audio(source);
      }
      this.isPaused = false;
      this.currentAudio.play();
    } else {
      this.isPaused = true;
      this.currentAudio.pause();
    }
  }


}
