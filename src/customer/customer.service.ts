import { Injectable } from '@nestjs/common';
import { CustomerInterface } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  private customers: CustomerInterface[] = [];

  getAllCustomers(): CustomerInterface[] {
    return this.customers;
  }

  addCustomer(createCustomerDto: CreateCustomerDto): CustomerInterface {
    const newCustomer: CustomerInterface = {
      id: this.customers.length + 1,
      ...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }
}
