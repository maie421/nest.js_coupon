import { Controller, Post } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Controller('batches')
export class BatchesController {
    constructor(private schedulerRegistry: SchedulerRegistry) { }

    @Post('/start-sample')
    start() {
      const job = this.schedulerRegistry.getCronJob('notifications');
  
      job.start();
      console.log('start!! ', job.lastDate());
    }
  
    @Post('/stop-sample')
    stop() {
      const job = this.schedulerRegistry.getCronJob('notifications');
  
      job.stop();
      console.log('stopped!! ', job.lastDate());
    }
}
