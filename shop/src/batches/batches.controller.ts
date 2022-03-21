import { Controller, Post,Get, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Controller('batches')
export class BatchesController {
    
    private readonly logger = new Logger(BatchesController.name);

    constructor(private schedulerRegistry: SchedulerRegistry) { }

    @Post('/start')
    start() {
        this.addCronJob('notifications','*');
    }
  
    @Post('/stop')
    stop() {
        this.stopCronJob('notifications');
    }
      
    @Get('index')
    getCrons() {
        const jobs = this.schedulerRegistry.getCronJobs();
        jobs.forEach((value, key, map) => {
          let next;
          try {
            next = value.nextDates().toDate();
          } catch (e) {
            next = 'error: next fire date is in the past!';
          }
          this.logger.log(`job: ${key} -> next: ${next}`);
        });
    }

    addCronJob(name: string, seconds: string) {
        const job = new CronJob(`${seconds} * * * * *`, () => {
          this.logger.warn(`time (${seconds}) for job ${name} to run!`);
        });
      
        this.schedulerRegistry.addCronJob(name, job);
        job.start();
      
        this.logger.warn(
          `job ${name} start`,
        );
    }

    stopCronJob(name: string) {
        const job = this.schedulerRegistry.getCronJob(name);
  
        job.stop();
        this.logger.warn(
            `job ${name} stop`,
        );
    }
}
