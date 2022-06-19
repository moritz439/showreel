import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackPreviewComponent } from './components/track-preview/track-preview.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ShareComponent } from './components/share/share.component';
import { QrCodeModule } from 'ng-qrcode';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
  declarations: [
    AppComponent,
    TrackPreviewComponent,
    PreviewComponent,
    ShareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QrCodeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
