import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomerService } from 'src/customer/services/customer/customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private servicecustomer:CustomerService){}
    @Get(':id')
    getAllUserFromService(
        @Param('id',ParseIntPipe) id: number,
        @Req() req:Request, @Res() res:Response
    ){
      const allUser= this.servicecustomer.getUserById(id);
      if(allUser){
        res.send(allUser)
      }else{
        res.status(400).send({message:'customer not fond'})
      }//expressjs way
    }

    @Get('search/:id')
    getAllUserBySearch( 
      @Param('id',ParseIntPipe) id:number
      ){
        const SearchByUser=this.servicecustomer.getUserById(id)
        if(SearchByUser)return SearchByUser;
        else throw new HttpException('customer not found!!',HttpStatus.BAD_REQUEST)

    }//nestjs way
}
