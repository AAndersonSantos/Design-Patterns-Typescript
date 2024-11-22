import { NotificationTypes } from "./notificationTypes";

abstract class NotificationFactory {
  public abstract createNotification(): NotificationTypes;

  public sendNotification(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

export { NotificationFactory };
