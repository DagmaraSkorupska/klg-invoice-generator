import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PreviewInvoiceComponent} from "./preview-invoice.component";

const routes: Routes = [{path: '', component: PreviewInvoiceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewInvoiceRoutingModule {
}
