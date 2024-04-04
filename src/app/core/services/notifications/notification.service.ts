import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public showMessage(message: string, color: string = 'primary', duration: number = 3000): void {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.classList.add(`notification-${color}`);
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, duration);
  }
}
