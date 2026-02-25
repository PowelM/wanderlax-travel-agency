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

export const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    icon: "book_online",
    iconColor: "text-primary",
    iconBg: "bg-primary/20",
    message: "New booking from ",
    highlight: "Alice Johnson",
    highlightColor: "text-primary",
    time: "2 minutes ago",
    category: "Booking",
    subject: "New Booking Confirmation – Santorini Luxury Villa",
    sender: "Alice Johnson",
    senderRole: "Customer",
    fullMessage: `Hi Admin,\n\nA new booking has just been placed and requires your review.\n\nBooking Details:\n• Customer: Alice Johnson\n• Destination: Santorini Luxury Villa\n• Travel Date: October 24, 2023\n• Guests: 2 Adults\n• Total Amount: $2,450\n• Status: Confirmed\n\nAlice has completed payment and is looking forward to her trip. Please ensure the villa is prepared and all ground arrangements are in order before her arrival.\n\nIf you have any questions or need to make changes, you can manage this booking from the Bookings section of the dashboard.\n\nBest regards,\nWanderlux Booking System`,
  },
  {
    id: 2,
    icon: "payments",
    iconColor: "text-green-500",
    iconBg: "bg-green-500/20",
    message: "Payment of ",
    highlight: "$1,250",
    highlightColor: "text-green-400",
    time: "1 hour ago",
    category: "Payment",
    subject: "Payment Received – $1,250 from Robert Fox",
    sender: "Payment Gateway",
    senderRole: "System",
    fullMessage: `Hi Admin,\n\nA payment has been successfully processed and credited to your account.\n\nTransaction Details:\n• Payer: Robert Fox\n• Amount: $1,250.00\n• Reference: TXN-20231022-0042\n• Booking: Kyoto Temple Tour\n• Method: Visa card ending in 4242\n• Date & Time: October 22, 2023 at 14:33 UTC\n\nThe funds will be available in your merchant account within 1–2 business days, subject to your bank's processing schedule.\n\nFor any disputes or refund requests, please contact our support team or navigate to the Bookings section.\n\nThank you,\nWanderlux Payment Gateway`,
  },
  {
    id: 3,
    icon: "directions_car",
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-500/20",
    message: "Rental car ",
    highlight: "#42",
    highlightColor: "text-yellow-500",
    time: "5 hours ago",
    category: "Fleet",
    subject: "Fleet Update – Rental Car #42 Returned",
    sender: "Fleet Management",
    senderRole: "System",
    fullMessage: `Hi Admin,\n\nRental Car #42 has been returned and is now available in your fleet.\n\nReturn Details:\n• Vehicle: 2022 Toyota Land Cruiser (White)\n• License Plate: KDK 421G\n• Vehicle ID: #42\n• Returned by: James Omondi\n• Return Location: Nairobi Depot – Gate B\n• Mileage at Return: 48,320 km\n• Fuel Level: 3/4 Full\n• Condition: Good – minor dust, no damage reported\n\nAction Required:\nPlease schedule a routine check & cleaning before the next rental. The vehicle is available for booking from tomorrow morning.\n\nYou can view full fleet details in the Fleet section of the dashboard.\n\nRegards,\nWanderlux Fleet Management`,
  },
];
