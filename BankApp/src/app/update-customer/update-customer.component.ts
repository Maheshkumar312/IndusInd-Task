
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {
  cif_number: number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cif_number = this.route.snapshot.params['cif_number'];

    this.customerService.getCustomerById(this.cif_number).subscribe(data => {
      this.customer = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.customerService.updateCustomer(this.cif_number, this.customer).subscribe(data => {
      this.goToCustomerList();
    }
      , error => console.log(error));
  }

  goToCustomerList() {
    this.router.navigate(['/customers']);
  }
}

//using reactive forms

// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Customer } from '../customer';
// import { CustomerService } from '../customer.service';

// @Component({
//   selector: 'app-update-customer',
//   templateUrl: './update-customer.component.html',
//   styleUrls: ['./update-customer.component.scss']
// })
// export class UpdateCustomerComponent implements OnInit {
//  cif_number : any;
//   customer : Customer; 
//   updateCustomerForm: FormGroup;
//   response: any;


//   constructor(
//     private router : ActivatedRoute,
//     private route : Router,
//     private customerService :CustomerService
//   ) { }

//   ngOnInit(): void {
//     this.cif_number=this.router.snapshot.params['cif_number'];
//     this.customerService.getCustomerById(this.cif_number).subscribe(data => {
//       this.customer = data;

//       this.updateCustomerForm = new FormGroup({ 
//         firstName : new FormControl(this.customer.firstName),
//         lastName : new FormControl(this.customer.lastName),        
//         mobileNumber : new FormControl(this.customer.mobileNumber),
//         emailId : new FormControl(this.customer.emailId),
//         mpin : new FormControl(this.customer.mpin)
//     })
//     })
//   }

//   updateCustomer(){
//     console.log(this.updateCustomerForm.value);
//     this.customerService.updateCustomer(this.updateCustomerForm.value,this.cif_number).subscribe( data => {
//       this.response = data;
//       console.log(this.response);
//       if(this.response.status === 'Successfully updated'){
//         this.route.navigate(['customers']);
//       }
//     })
//   }

// }
