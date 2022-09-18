import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewInvoiceComponent} from "./new-invoice.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NewInvoiceRoutingModule} from "./new-invoice-routing.module";



@NgModule({
  declarations: [NewInvoiceComponent],
  imports: [
    CommonModule,
    NewInvoiceRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class NewInvoiceModule { }
