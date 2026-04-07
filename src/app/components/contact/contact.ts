import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {

  showToast = false;

  // 🔥 Show Toast Helper
  private triggerToast(): void {
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }

  // 📩 Form Submit
  onSubmit(event: Event): void {
    event.preventDefault();
    this.triggerToast();
  }

  // 📋 Copy Email
  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText('akash7pute17@gmail.com');
      this.triggerToast();
    } catch (error) {
      console.error('Clipboard copy failed', error);
    }
  }
}
