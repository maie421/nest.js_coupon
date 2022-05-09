import {
  Column,
  CreateDateColumn,
  Entity, Index,
  Long,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: Long;

  @Index()
  @Column("int")
  coupon_id: Long;

  @Column("text")
  discount_type: string;

  @Column("text")
  discount_value: string;

  @Column({ type: "int", nullable: true })
  period_day: number;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;
}
