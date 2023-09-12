import { OrderStatus, Subjects } from '../enums';

export interface OrderCreatedEvent {
  subject: Subjects.ORDER_CREATED;
  data: {
    id: string;
    version: number;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
