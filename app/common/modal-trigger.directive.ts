import { Directive, OnInit, Inject, Input, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jquery.service'

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

    @Input('modal-trigger') modalId: string
    private el: HTMLElement
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement
    }
    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({})
        })
    }
}