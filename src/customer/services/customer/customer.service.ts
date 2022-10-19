import { Injectable } from '@nestjs/common';
import { customer } from 'src/customer/modal/customer';

@Injectable()
export class CustomerService {
    user=[
        {
            id:1,
            name:'khan',
            email:'abc@gamil.com'

        },
        {
            id:2,
            name:'umar',
            email:'abd@gamil.com'

        },
        {
            id:3,
            name:'sabir',
            email:'agc@gamil.com'

        }
       
    ]
    getUserById(id:number){
        return this.user.find((user)=>
        user.id===id)
    }
  
       
}
