import { Component, Output, EventEmitter } from '@angular/core';

interface Ribbon {
  dx: number;
  r: number;
  delay: number;
  color: string;
}

@Component({
  selector: 'app-submit-icon',
  templateUrl: './submit-icon.component.html',
  styleUrls: ['./submit-icon.component.css']
})
export class SubmitIconComponent {
  @Output() submitted = new EventEmitter<void>();

  // state: idle (light-blue) → loading (royal) → done (royal + error) → auto-reset to idle
  state: 'idle' | 'loading' | 'done' = 'idle';
  ribbons: Ribbon[] = [];

  onClick() {
    if (this.state !== 'idle') return;

    this.state = 'loading';
    this.submitted.emit();

    const palette = [
      '#F44336', '#E91E63', '#9C27B0',
      '#3F51B5', '#03A9F4', '#009688',
      '#8BC34A', '#FFEB3B', '#FF9800'
    ];

    this.ribbons = Array.from({ length: 20 }, () => ({
      dx: Math.random() * 100 - 50,
      r:  Math.random() * 360,
      delay: Math.random() * 0.5,
      color: palette[Math.floor(Math.random() * palette.length)]
    }));


    // after 1s, show error
    setTimeout(() => {
      this.state = 'done';

      // after showing error for 2s, reset to idle
      setTimeout(() => {
        this.state = 'idle';
        this.ribbons = [];  // clear out for next time
      }, 3000);

    }, 2500);
  }
}
