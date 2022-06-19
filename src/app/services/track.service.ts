import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TrackList } from 'src/assets/trackList';
import { Style, Track } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private tracks = [];
  currentAudio: HTMLAudioElement;
  currentTrack: Track;
  isPaused = true;
  private isPausedSubject: Subject<boolean> = new Subject();

  private $nowPlaying: Subject<Track> = new Subject();

  trackList: Track[] = TrackList;

  constructor() {
    this.isPausedSubject.next(true);
    this.tracks.push(
      ...this.trackList
    );
    for (var i = 1; i <= 4; i++) {
      this.tracks.push(
        {
          name: 'test',
          styles: [Style.aggressive, Style.chill, Style.dark],
          source: '../assets/tracks/ice.mp3',
        }
      )
    }
    this.$nowPlaying.subscribe(track => this.currentTrack = track);
    this.isPausedSubject.subscribe(isPaused => {
      this.isPaused = isPaused;
      if (isPaused) {
        this.currentAudio.pause();
      } else {
        this.currentAudio.play();
      }
    });
  }

  getTracks(): Track[] {
    return this.tracks;
  }

  getNowPlaying() {
    return this.$nowPlaying.asObservable();
  }

  getPausedState() {
    return this.isPausedSubject.asObservable();
  }

  getTrackByName(name: string): Track {
    return this.tracks.find(track => track.name === name);
  }

  play(track?: Track) {

    // neuer track -> neuen spielen
    if (track && track.name !== this.currentTrack?.name) {
      this.$nowPlaying.next(track);
      this.currentAudio = new Audio(track.source);
      this.isPausedSubject.next(false);

    } else if (track && track.name === this.currentTrack?.name && !this.isPaused) {
      this.isPausedSubject.next(true);
    } else if (this.isPaused) {
      this.isPausedSubject.next(false);
    } else {
      this.isPausedSubject.next(true);
    }
  }

  stop() {
    this.$nowPlaying.next(null);
    this.isPausedSubject.next(true);
  }


}
