import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../services/company.service";
import {take} from "rxjs";
import {Company} from "../model/company.model";

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.css']
})
export class PreviewInvoiceComponent implements OnInit {
  public company: Company;

  constructor(private companyService: CompanyService ) { }

  ngOnInit(): void {
    this.companyService.getCompany().pipe(take(1)).subscribe(result => {
      this.company = result;
    })
  }

}
