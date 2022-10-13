import { Controller, Get } from '@nestjs/common';
import { CustomerService } from 'src/customer/services/customer/customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private servicecustomer:CustomerService){}
    @Get('')
    getAllDetail(){
        return this.servicecustomer.serviceCustomer()
    }
}
