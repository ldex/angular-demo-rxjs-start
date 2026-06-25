import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-admin',
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `
        <h2>Admin</h2>
        <div style="margin-bottom: 80px">
            <p>
                Welcome to the admin area.
            </p>
            <p>
                (Access is not secured as this is not the point of this demo)
            </p>
        </div>
    `,
})
export class Admin {


}