import { BookingOrderOrderByWithAggregationInput } from "../../../inputs/BookingOrderOrderByWithAggregationInput";
import { BookingOrderScalarWhereWithAggregatesInput } from "../../../inputs/BookingOrderScalarWhereWithAggregatesInput";
import { BookingOrderWhereInput } from "../../../inputs/BookingOrderWhereInput";
export declare class GroupByBookingOrderArgs {
    where?: BookingOrderWhereInput | undefined;
    orderBy?: BookingOrderOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "status" | "SelectedPaymentType" | "stripePaymentReference" | "buyerId" | "tenantId" | "createdAt" | "updatedAt">;
    having?: BookingOrderScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
