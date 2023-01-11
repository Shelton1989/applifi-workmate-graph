import { BookingOrderLineItemCreateInput } from "../../../inputs/BookingOrderLineItemCreateInput";
import { BookingOrderLineItemUpdateInput } from "../../../inputs/BookingOrderLineItemUpdateInput";
import { BookingOrderLineItemWhereUniqueInput } from "../../../inputs/BookingOrderLineItemWhereUniqueInput";
export declare class UpsertBookingOrderLineItemArgs {
    where: BookingOrderLineItemWhereUniqueInput;
    create: BookingOrderLineItemCreateInput;
    update: BookingOrderLineItemUpdateInput;
}
