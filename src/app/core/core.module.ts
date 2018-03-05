import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AddressService } from './../address/address.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule

  ],
  declarations: [],
  providers: [ AddressService ]
})
export class CoreModule { }
