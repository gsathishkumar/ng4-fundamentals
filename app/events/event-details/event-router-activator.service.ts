import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { Injectable } from '@angular/core'
import { EventService } from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.eventService.getEvent(+route.params['id'])
        if (!eventExist){
            this.router.navigate(['/404'])
        }
        return eventExist
    }
    constructor(private eventService: EventService, private router: Router) {

    }
}