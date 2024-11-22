import { EmailNotification } from "./Notification";
import { NotificationFactory } from "./NotificationFactory";
import { NotificationTypes } from "./notificationTypes";

export class EmailNotificationFactory extends NotificationFactory {
    public createNotification(): NotificationTypes {
      return new EmailNotification();
    }
}