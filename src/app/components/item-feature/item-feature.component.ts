import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
    selector: 'app-item-feature',
    templateUrl: 'item-feature.component.html',
    styleUrls: ['item-feature.component.scss']
})
export class ItemFeatureComponent implements OnInit {
    protected linearGradient: string;

    @Input('title') title: string;

    @Input('direction') direction: number;
    @Input('colorStart') colorStart: string;
    @Input('colorStop') colorStop: string;
    @Input('percentColorStart') percentColorStart: number;
    @Input('percentColorStop') percentColorStop: number;
    @Output('gotoFeature') gotoFeature = new EventEmitter<any>();

    public constructor() {}

    ngOnInit(): void {
        this.linearGradient = `linear-gradient(${this.direction}deg, ${this.colorStart} ${this.percentColorStart}%, ${this.colorStop} ${this.percentColorStop}%)`;
    }

    public handleGotoFeature() {
        this.gotoFeature.emit('12');
    }
}
