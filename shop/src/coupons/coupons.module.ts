import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponRepository } from './copons.repository';
import { CouponsService } from './coupons.service';

@Module({
    imports: [TypeOrmModule.forFeature([CouponRepository])],
    providers: [CouponsService]
})
export class CouponsModule {}
