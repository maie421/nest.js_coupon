import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { Connection } from "typeorm";
import { ConfigModule } from "@nestjs/config";
import { UserCouponsModule } from "./user_coupons/user_coupons.module";
import { CouponsModule } from "./coupons/coupons.module";
import { ScheduleModule } from "@nestjs/schedule";
import { BatchesModule } from "./batches/batches.module";

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === "dev" ? ".env.test" : ".env.test",
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule,
    UserCouponsModule,
    CouponsModule,
    BatchesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
