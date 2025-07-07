// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Remove the alert/log here:
  onFormSubmit(): void {
    // Form submitted — no notification shown
    // (You can hook real submission logic here later)
  }
}
