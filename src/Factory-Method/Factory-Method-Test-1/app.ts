import { EmailNotificationFactory } from "./EmailNotificationFactory";
import { NotificationFactory } from "./NotificationFactory";
import { SMSNotificationFactory } from "./SMSNotificationFactory";

function sendMessages(factory: NotificationFactory, message: string): void {
    factory.sendNotification(message);
  }
  
const emailFactory = new EmailNotificationFactory();
sendMessages(emailFactory, "Olá! Este é um email.");
  
const smsFactory = new SMSNotificationFactory();
sendMessages(smsFactory, "Olá! Este é um SMS.");
  