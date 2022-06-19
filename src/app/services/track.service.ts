import { Injectable } from '@angular/core';
import { Style, Track } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private tracks = [];
  currentAudio: HTMLAudioElement;
  currentSource: string;
  isPaused = false;

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

  play(source: string) {
    if (source !== this.currentSource) {
      this.currentAudio = new Audio(source);
    }
    this.currentAudio.play();
  }

  pause() {

  }
}
