import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    animations: [
    trigger('sidenavState', [
      state('open', style({ width: '250px' })),
      state('closed', style({ width: '0px' })),
      transition('open <=> closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Prasanth';
  isSidenavOpen = true;
  sidenavClass = 'lg';
}
