enum disCountType {
    Pixed = "PIXED",
    Percent = "PERCENT",

}

export class CreateCouponDto{
    discount_type : disCountType
    discount_value: string
    period_date: number    
}