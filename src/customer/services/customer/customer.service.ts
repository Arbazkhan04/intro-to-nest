import { Injectable } from '@nestjs/common';
import { customer } from 'src/customer/modal/customer';

@Injectable()
export class CustomerService {
    serviceCustomer():customer[]{
        return[
            {id:1,name:'Sabir shah',qualification:'wala'},
            {id:2,name:'Arbaz khan',qualification:'Developer'},
            {id:3,name:'Umar',qualification:'Andriod Developer'},
        ]
    }
}
