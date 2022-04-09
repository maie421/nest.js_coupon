import { Injectable, Logger } from '@nestjs/common';
import { CreateCouponDto } from 'src/dto/coupons/ceate-coupon.dto';
import { CouponRepository } from './copons.repository';
import { Coupon } from './coupon.entity';

@Injectable()
export class CouponsService {

    constructor(
        private couponRepository: CouponRepository,
    ){}

    async save(createCouponDto : CreateCouponDto): Promise<Coupon>{
      return this.couponRepository.save(createCouponDto);
    }

    async findAll(): Promise<Coupon[]>{
      return this.couponRepository.find();
    }
}
