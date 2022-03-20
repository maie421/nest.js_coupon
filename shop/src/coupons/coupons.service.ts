import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { CouponRepository } from './copons.repository';

@Injectable()
export class CouponsService {

    private readonly logger = new Logger(CouponsService.name);
    
    constructor(
        private couponRepository: CouponRepository,
      ){}

      @Cron('* * * * * *', {
        name: 'notifications',
      })
      triggerNotifications() {
        this.logger.debug('Called every 15 seconds');
      }
}
