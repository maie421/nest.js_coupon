import { Body, Controller, Post } from '@nestjs/common';
import { CreateCouponDto } from 'src/dto/coupons/ceate-coupon.dto';
import { Coupon } from './coupon.entity';
import { CouponsService } from './coupons.service';

@Controller('coupons')
export class CouponsController {
    constructor(
        private readonly couponservice: CouponsService,
    ){}

    @Post()
   async save(@Body() createCouponDto: CreateCouponDto): Promise<Coupon>{
       return this.couponservice.save(createCouponDto);
   }
}
