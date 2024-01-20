import { Routes } from '@angular/router';
import { VoucherFormComponent } from './voucher-form/voucher-form.component'
import { VoucherPrinterComponent } from './voucher-printer/voucher-printer.component';

export const routes: Routes = [
    { path: '', component: VoucherFormComponent },
    { path: 'print', component: VoucherPrinterComponent }
];
