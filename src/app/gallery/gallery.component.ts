import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface Photo {
  src: string;
  alt: string;
  title: string;
  description: string;
  location?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  photos: Photo[] = [
    {
      src: 'assets/images/frontPic.jpg',
      alt: 'Yulong Snow Mountain',
      title: 'Yulong Snow Mountain',
      description: 'A breathtaking view of Yulong Snow Mountain in Lijiang, China. This photo captures the majestic snow-capped peaks against the blue sky.',
      location: 'Lijiang, China'
    },
    {
      src: 'assets/images/anotherPic.jpg',
      alt: 'Another beautiful landscape',
      title: 'Another Beautiful Landscape',
      description: 'Another stunning photograph from my travels, showcasing the beauty of nature.',
      location: 'Unknown'
    }
  ];

  selectedPhoto: Photo | null = null;

  openPhoto(photo: Photo) {
    this.selectedPhoto = photo;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }
}
