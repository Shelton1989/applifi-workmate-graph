import { BookingOrderLineItemOrderByWithRelationInput } from "../../../inputs/BookingOrderLineItemOrderByWithRelationInput";
import { BookingOrderLineItemWhereInput } from "../../../inputs/BookingOrderLineItemWhereInput";
import { BookingOrderLineItemWhereUniqueInput } from "../../../inputs/BookingOrderLineItemWhereUniqueInput";
export declare class FindFirstBookingOrderLineItemArgs {
    where?: BookingOrderLineItemWhereInput | undefined;
    orderBy?: BookingOrderLineItemOrderByWithRelationInput[] | undefined;
    cursor?: BookingOrderLineItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "priceId" | "bookingId" | "createdAt" | "updatedAt"> | undefined;
}
