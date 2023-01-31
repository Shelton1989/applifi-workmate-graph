import { BookingOrderCreateNestedOneWithoutItemsInput } from "../inputs/BookingOrderCreateNestedOneWithoutItemsInput";
import { PriceCreateNestedOneWithoutBookingLineItemsInput } from "../inputs/PriceCreateNestedOneWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemCreateInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    selectedQuantity?: number | undefined;
    selectedStartDate?: Date | undefined;
    selectedEndDate?: Date | undefined;
    LineItemPrice: PriceCreateNestedOneWithoutBookingLineItemsInput;
    Booking: BookingOrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
