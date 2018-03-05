import { Component } from '@angular/core';

import { Address } from './core/model';
import { AddressService } from './address/address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Address query module';

  researched =  new Address();

  constructor(
    private addressService: AddressService
  ) { }

  search(zipCode: string) {
    this.addressService.search(zipCode)
    .then(address => {
      this.researched = address;
      })
      .catch(erro => console.log('Ocorreu algum erro. '));
  }

}
