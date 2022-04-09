import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CouponRepository } from "./copons.repository";
import { CouponsService } from "./coupons.service";
import { CouponsController } from "./coupons.controller";

@Module({
  imports: [TypeOrmModule.forFeature([CouponRepository])],
  providers: [CouponsService],
  controllers: [CouponsController],
})
export class CouponsModule {}
