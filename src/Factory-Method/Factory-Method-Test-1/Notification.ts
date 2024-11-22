import { NotificationTypes } from "./notificationTypes";

// Notificação por Email
class EmailNotification implements NotificationTypes {
    send(message: string): void {
      console.log(`Enviando email com a mensagem: ${message}`);
    }
}
  
// Notificação por SMS
class SMSNotification implements NotificationTypes {
    send(message: string): void {
      console.log(`Enviando SMS com a mensagem: ${message}`);
    }
}

export { EmailNotification, SMSNotification };