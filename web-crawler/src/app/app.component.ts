import { Component } from '@angular/core';
import { BbcTitlesComponent } from './components/bbc-titles/bbc-titles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-bbc-titles></app-bbc-titles>`,
  imports: [BbcTitlesComponent],
})
export class AppComponent {}
