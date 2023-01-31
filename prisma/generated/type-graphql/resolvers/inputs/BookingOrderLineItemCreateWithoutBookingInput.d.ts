import { PriceCreateNestedOneWithoutBookingLineItemsInput } from "../inputs/PriceCreateNestedOneWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemCreateWithoutBookingInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    LineItemPrice: PriceCreateNestedOneWithoutBookingLineItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
