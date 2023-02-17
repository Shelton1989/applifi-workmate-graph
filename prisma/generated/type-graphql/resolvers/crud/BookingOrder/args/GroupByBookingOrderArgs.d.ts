import { BookingOrderOrderByWithAggregationInput } from "../../../inputs/BookingOrderOrderByWithAggregationInput";
import { BookingOrderScalarWhereWithAggregatesInput } from "../../../inputs/BookingOrderScalarWhereWithAggregatesInput";
import { BookingOrderWhereInput } from "../../../inputs/BookingOrderWhereInput";
export declare class GroupByBookingOrderArgs {
    where?: BookingOrderWhereInput | undefined;
    orderBy?: BookingOrderOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "experienceId" | "status" | "buyerId" | "tenantId" | "PaymentStatus" | "createdAt" | "updatedAt">;
    having?: BookingOrderScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
