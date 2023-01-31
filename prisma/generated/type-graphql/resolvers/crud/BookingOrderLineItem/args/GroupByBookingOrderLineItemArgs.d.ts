import { BookingOrderLineItemOrderByWithAggregationInput } from "../../../inputs/BookingOrderLineItemOrderByWithAggregationInput";
import { BookingOrderLineItemScalarWhereWithAggregatesInput } from "../../../inputs/BookingOrderLineItemScalarWhereWithAggregatesInput";
import { BookingOrderLineItemWhereInput } from "../../../inputs/BookingOrderLineItemWhereInput";
export declare class GroupByBookingOrderLineItemArgs {
    where?: BookingOrderLineItemWhereInput | undefined;
    orderBy?: BookingOrderLineItemOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "details" | "comments" | "selectedQuantity" | "selectedStartDate" | "selectedEndDate" | "priceId" | "bookingId" | "createdAt" | "updatedAt">;
    having?: BookingOrderLineItemScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
