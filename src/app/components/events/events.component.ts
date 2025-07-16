import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { EventsService, Event } from '../../events.service';

@Component({
  selector: 'app-events',
  imports: [CommonModule, HeroComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  eventsByMonth: { [key: string]: Event[] } = {};

  selectedEvent: Event | null = null;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getEvents().subscribe((events) => {
      console.log(events)
      this.groupEventsByMonth(events);
    });
  }

  groupEventsByMonth(events: Event[]) {
    this.eventsByMonth = events.reduce((acc, event: any) => {
      const month = new Date(event.dateTime).toLocaleString('default', { month: 'long', year: 'numeric' });
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(event);
      return acc;
    }, {} as { [key: string]: Event[] });
  }

  openModal(event: Event) {
    this.selectedEvent = event;
  }

  closeModal() {
    this.selectedEvent = null;
  }
}
