import { SMSNotification } from "./Notification";
import { NotificationFactory } from "./NotificationFactory";
import { NotificationTypes } from "./notificationTypes";

export class SMSNotificationFactory extends NotificationFactory {
    public createNotification(): NotificationTypes {
      return new SMSNotification();
    }
}