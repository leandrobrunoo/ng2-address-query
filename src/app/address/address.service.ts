import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Address } from './../core/model';

@Injectable()
export class AddressService {

  constructor(
    private http: HttpClient
  ) { }

  search(zipCode: string): Promise<Address> {
    return this.http.get(`https://viacep.com.br/ws/${zipCode}/json`)
    .toPromise()
    .then(response => response as Address);
  }
}
