import { Module } from '@nestjs/common';
import { SalesController } from './sales/sales.controller';
import { SalesService } from './sales/sales.service';

@Module({
  imports: [],
  controllers: [SalesController],
  providers: [SalesService],
})
export class AppModule {}
