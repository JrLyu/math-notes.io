import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.css'
})
export class DemosComponent {
  openNotes() {
    window.open('https://jrlyu.github.io/notes.html', '_blank');
  }

  openTravelLedger() {
    window.open('https://jrlyu.github.io/travel-ledger/', '_blank');
  }
}
