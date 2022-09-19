import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {take} from "rxjs";
import {Company} from "../../model/company.model";
import {InvoiceItem} from "../../model/invoice-item";

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.css']
})
export class PreviewInvoiceComponent implements OnInit {
  public company: Company;
  public invoice: InvoiceItem[];

  constructor(private companyService: CompanyService) {
  }


  ngOnInit(): void {
    this.companyService.getCompany().pipe(take(1)).subscribe(result => {
      this.company = result;
    });
    if (history.state.items) {
      this.invoice = history.state.items;
    }
  }

  getSum(invoice: InvoiceItem[]) {
    return invoice?.reduce((prev, curr) => prev + curr.count * curr.price, 0)
  }
}
