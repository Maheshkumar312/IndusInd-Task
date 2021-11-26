import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  updateCustomer(cif_number: number) {
    this.router.navigate(['update-customer', cif_number]);
  }

  deleteCustomer(cif_number: number) {
    this.customerService.deleteCustomer(cif_number).subscribe(data => {
      console.log(data);
      this.getCustomers();

    })
  }
}