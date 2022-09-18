import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreviewInvoiceComponent} from "./preview-invoice.component";
import {PreviewInvoiceRoutingModule} from "./preview-invoice-routing.module";



@NgModule({
  declarations: [PreviewInvoiceComponent],
  imports: [
    CommonModule,
    PreviewInvoiceRoutingModule
  ]
})
export class PreviewInvoiceModule { }
