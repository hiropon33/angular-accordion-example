import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('accordion', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('500ms', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: '1', overflow: 'hidden' }),
        animate('500ms', style({ height: '0' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'angular accordion example';
  public showDetail: boolean;

  public ngOnInit() {
    // initialize
    this.showDetail = false;
  }

  // event
  onAccordion($event) {
    this.showDetail = !this.showDetail;
  }
}
