import {
  Column,
  CreateDateColumn,
  Entity,
  Long,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class UserCoupon {
  @PrimaryGeneratedColumn()
  id: Long;

  @Column("text")
  coupon_id: string;

  @Column("text")
  user_id: string;

  @Column("text")
  status: string;

  @Column("timestamp")
  public assigne_at: Date;

  @Column({ type: "timestamp", precision: 6, nullable: true })
  public end_at: Date;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;
}
