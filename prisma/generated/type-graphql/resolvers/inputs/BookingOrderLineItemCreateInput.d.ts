import { BookingOrderCreateNestedOneWithoutItemsInput } from "../inputs/BookingOrderCreateNestedOneWithoutItemsInput";
import { PriceCreateNestedOneWithoutBookingLineItemsInput } from "../inputs/PriceCreateNestedOneWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemCreateInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    LineItemPrice: PriceCreateNestedOneWithoutBookingLineItemsInput;
    Booking: BookingOrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
