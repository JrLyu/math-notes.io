// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubmitIconComponent } from './submit-icon/submit-icon.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DemosComponent } from './demos/demos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubmitIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,          // Add this for routing functionality
    BrowserAnimationsModule,   // required by Material components
    MatIconModule,             // for <mat-icon>
    MatButtonModule,           // for mat-raised-button
    MatProgressSpinnerModule,  // for loading indicators
    AboutComponent,            // Standalone component
    GalleryComponent,          // Standalone component
    DemosComponent             // Standalone component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
