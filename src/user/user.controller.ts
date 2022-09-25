import { Controller,Get } from '@nestjs/common';

@Controller('user')
export class UserController {
   
    @Get()
    userinfo():string{
        return 'user info works'
    }
    @Get('userDetail')
    userDetails():object{
        return{
            name:'Arbaz khan',
            profession:'NestJs Developer'
        }
    }
}
