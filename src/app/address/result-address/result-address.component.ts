import { Component, OnInit, Input } from '@angular/core';

import { Address } from './../../core/model';

@Component({
  selector: 'app-result-address',
  templateUrl: './result-address.component.html',
  styleUrls: ['./result-address.component.css']
})
export class ResultAddressComponent implements OnInit {

  @Input() address = new Address();

  constructor() { }

  ngOnInit() {
  }

}
