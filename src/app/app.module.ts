import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackPreviewComponent } from './components/track-preview/track-preview.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackPreviewComponent,
    HeaderSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
