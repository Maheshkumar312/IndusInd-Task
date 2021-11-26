import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private customerservice: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }
  saveCustomer() {
    this.customerservice.createCustomer(this.customer).subscribe(data => {
      console.log(data);

    },

      error => console.log(error));
  }
  onSubmit() {
    console.log(this.customer);
    this.saveCustomer();
    alert("Account Details Added !!")
    this.router.navigate(['/customers'])
  }
}


// using ReactiveForms
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Customer } from '../customer';
// import { CustomerService } from '../customer.service';

// @Component({
//   selector: 'app-create-customer',
//   templateUrl: './create-customer.component.html',
//   styleUrls: ['./create-customer.component.scss']
// })
// export class CreateCustomerComponent implements OnInit {
// response: any;
// constructor(
//   private customerservice : CustomerService
// ) { }

// ngOnInit(): void {
// }

// cusForm = new FormGroup({
//   cif_number: new FormControl('', [Validators.required]),
//   firstName: new FormControl('', [Validators.required]),
//   lastName: new FormControl('', [Validators.required]),
//   mobileNumber: new FormControl('', [Validators.required]),
//   emailId: new FormControl('', [Validators.required, Validators.email]),
//   mpin: new FormControl('', [Validators.required]),


// })

// saveCustomer(){
//   console.log(this.cusForm.value);
//   this.customerservice.createCustomer(this.cusForm.value).subscribe(
//     response => { this.response = response }
//   )
//   console.log(this.response);
//   this.cusForm.reset();
//   alert("success");
// }

// }