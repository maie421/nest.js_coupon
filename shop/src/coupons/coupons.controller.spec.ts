import { Test, TestingModule } from '@nestjs/testing';
import { CreateCouponDto, disCountType } from 'src/dto/coupons/ceate-coupon.dto';
import { UsersController } from 'src/users/users.controller';
import { CouponRepository } from './copons.repository';
import { CouponsController } from './coupons.controller';
import { CouponsService } from './coupons.service';

describe('CouponsController', () => {
  let controller: CouponsController;

  const mockCouponRepository = () => ({
    save: jest.fn(),
    findAll: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouponsController],
      providers:[
        CouponsService,
        {
          provide: CouponRepository,
          useFactory: mockCouponRepository,
        }
      ],
    }).compile();

    controller = module.get<CouponsController>(CouponsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('쿠폰 저장 save', () => {
    it('쿠폰 저장',async ()=>{
      const couponDto = new CreateCouponDto;

      couponDto.discount_type = disCountType.Pixed;
      couponDto.discount_value = '100%';
      couponDto.period_date = 1;

      await controller.save(couponDto);

      expect(couponDto.discount_type).toEqual(disCountType.Pixed);
      expect(couponDto.discount_value).toEqual('100%');
      expect(couponDto.period_date).toEqual(1);
    })
  });
});
