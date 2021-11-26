import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  createCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post(this.baseURL + "/addcustomer", customer);
  }
  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseURL + "/getcustomer");
  }
  //get employee by id
  getCustomerById(cif_number: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.baseURL + `/${cif_number}`);
  }
  //update employee
  updateCustomer(cif_number: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(this.baseURL + `/${cif_number}`, customer);
  }
  //delete employee
  deleteCustomer(cif_number: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + `/${cif_number}`, { responseType: 'text' });
  }
}
