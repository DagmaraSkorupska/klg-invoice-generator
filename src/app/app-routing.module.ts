import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('./components/new-invoice/new-invoice.module').then(
        (m) => m.NewInvoiceModule
      ),
  },
  {
    path:'preview',
    loadChildren: () =>
      import('./components/preview-invoice/preview-invoice.module').then(
        (m) => m.PreviewInvoiceModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
