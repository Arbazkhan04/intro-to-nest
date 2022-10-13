import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [CustomerModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
