import { Subjects } from '../enums/subjects.enum';

export interface TicketUpdateEvent {
  subject: Subjects.TICKET_UPDATED;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
