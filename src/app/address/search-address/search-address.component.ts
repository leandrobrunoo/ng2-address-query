import { AddressService } from './../address.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Address } from './../../core/model';

@Component({
  selector: 'app-search-address',
  templateUrl: './search-address.component.html',
  styleUrls: ['./search-address.component.css']
})
export class SearchAddressComponent implements OnInit {

  @Output() result = new EventEmitter();

  address =  new Address();

  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit() {
  }

  search(zipCode: string) {
    this.addressService.search(zipCode)
    .then(address => {
      this.address = address;
      this.result.emit(this.address);
      })
      .catch(erro => console.log('Ocorreu algum erro. '));
  }

}
