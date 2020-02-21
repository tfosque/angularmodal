import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-summary',
  templateUrl: './details-summary.component.html',
  styleUrls: ['./details-summary.component.scss']
})
export class DetailsSummaryComponent implements OnInit {

  @Input() isDetailsCollapsed: boolean;
  @Input() savedSearch: any;

  constructor() { }

  ngOnInit() { }

  toggleDetails() {
  }


}
