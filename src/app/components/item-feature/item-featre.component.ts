import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
    selector: 'app-item-feature',
    templateUrl: 'item-featre.component.html',
    styleUrls: ['item-featre.component.scss']
})
export class ItemFeatureComponent implements OnInit {
    protected linearGradient: string;

    @Input('title') title: string;

    @Input('direction') direction: number;
    @Input('colorStart') colorStart: string;
    @Input('colorStop') colorStop: string;
    @Input('percenColorStart') percenColorStart: number;
    @Input('percenColorStop') percenColorStop: number;
    @Output('gotoFeature') gotoFeature = new EventEmitter<any>();

    public constructor() {}

    ngOnInit(): void {
        this.linearGradient = `linear-gradient(${this.direction}deg, ${this.colorStart} ${this.percenColorStart}%, ${this.colorStop} ${this.percenColorStop}%)`;
    }

    public handleGotoFeature() {
        console.log(13);
        
        this.gotoFeature.emit('12');
    }
}
