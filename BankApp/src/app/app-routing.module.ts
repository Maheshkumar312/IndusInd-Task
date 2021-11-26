import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [

  { path: 'customers', component: CustomerListComponent },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'update-customer/:cif_number', component: UpdateCustomerComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
