import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchAddressComponent } from './search-address/search-address.component';
import { ResultAddressComponent } from './result-address/result-address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [SearchAddressComponent, ResultAddressComponent],
  exports: [ SearchAddressComponent, ResultAddressComponent ]
})
export class AddressModule { }
