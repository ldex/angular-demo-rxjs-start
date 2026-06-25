import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
        <h2>RxJS Demo</h2>
        <p style="margin-bottom: 80px">Welcome to the RxJS demonstration application.</p>

    `
})
export class Home {
    constructor() { }

}