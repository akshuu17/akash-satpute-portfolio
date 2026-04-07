import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class FooterComponent {

  showToast = false;

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText('akash7pute17@gmail.com');
      this.showToast = true;

      setTimeout(() => {
        this.showToast = false;
      }, 2000);

    } catch (error) {
      console.error('Copy failed', error);
    }
  }
}
