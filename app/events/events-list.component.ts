import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <div class="row">
            <div *ngFor="let event1 of events"  class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event1.name)" [event]="event1"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => { this.events = events })
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}