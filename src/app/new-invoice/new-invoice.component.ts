import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-nev-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
