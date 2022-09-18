import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company} from "../model/company.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompany(): Observable<Company> {
    return this.httpClient.get<Company>('assets/db.json')
  }
}
