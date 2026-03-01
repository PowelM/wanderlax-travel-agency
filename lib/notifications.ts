export type Notification = {
  id: number;
  icon: string;
  iconColor: string;
  iconBg: string;
  message: string;
  highlight: string;
  highlightColor: string;
  time: string;
  category: string;
  subject: string;
  sender: string;
  senderRole: string;
  fullMessage: string;
};

export const NOTIFICATIONS: Notification[] = [];
