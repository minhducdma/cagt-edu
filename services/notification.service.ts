import * as Notifications from 'expo-notifications';

export default class NotificationService {
  static async registerForPushNotificationsAsync(): Promise<void> {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('Permission to receive notifications was denied');
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo push token:', token);

    // Lắng nghe sự kiện khi có thông báo mới
    Notifications.addNotificationReceivedListener(
      NotificationService.handleNotification,
    );
  }

  static handleNotification(notification: Notifications.Notification): void {
    console.log('Received notification:', notification);
    // Xử lý thông báo ở đây
  }
}
