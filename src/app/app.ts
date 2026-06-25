import { Component, signal, VERSION, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Angular Store');
  protected readonly version = signal(VERSION.full);
}
