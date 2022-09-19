import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {InvoiceItem} from "../../model/invoice-item";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-nev-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {

  invoiceForm: FormGroup | any;
  items: InvoiceItem[];
  public readonly MIN_NAME_LENGTH = 3;
  public readonly MAX_NAME_LENGTH = 30;
  public readonly MIN_COUNT = 1;
  public readonly MAX_COUNT = 100;
  public readonly MIN_PRICE = 1;
  public readonly MAX_PRICE = 1000000;


  public validationValue = {
    name: [
      {type: 'required', message: 'Please enter name!'},
      {type: 'minlength', message: 'Min length is: ' + this.MIN_NAME_LENGTH},
      {type: 'maxlength', message: 'Max length is: ' + this.MAX_NAME_LENGTH}
    ],
    count: [
      {type: 'required', message: 'Please enter count!'},
      {type: 'min', message: 'Min value is: ' + this.MIN_COUNT},
      {type: 'max', message: 'Max value is: ' + this.MAX_COUNT},
      {type: 'pattern', message: 'Please enter number!'}
    ],
    price: [
      {type: 'required', message: 'Please enter price!'},
      {type: 'min', message: 'Min value is: ' + this.MIN_PRICE},
      {type: 'max', message: 'Max value is: ' + this.MAX_PRICE},
      {type: 'pattern', message: 'Please enter number!'}
    ]
  }

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      items: this.fb.array([this.createNewItems()])
    });
  };


  createNewItems(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(this.MIN_NAME_LENGTH), Validators.maxLength(this.MAX_NAME_LENGTH)]],
      count: [1, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(this.MIN_COUNT), Validators.max(this.MAX_COUNT)]],
      price: [1, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(this.MIN_PRICE), Validators.max(this.MAX_PRICE)]]
    })
  };


  addEmptyItems() {
    const formArray = this.invoiceForm.get('items') as FormArray;
    formArray.push(this.createNewItems())
  };

  deleteItem(index: number) {
    const formArray = this.invoiceForm.get('items') as FormArray;
    formArray.removeAt(index);
  };


  submitForm() {
    this.invoiceForm.markAllAsTouched();
    if ((this.invoiceForm.get('items') as FormArray).length == 0) {
      this.snackBar.open('Please add items', 'OK')
    } else if (this.invoiceForm.valid) {
      this.router.navigate(['preview'], {state: {items: (this.invoiceForm.get('items') as FormArray).value}});
    }
  };
}
