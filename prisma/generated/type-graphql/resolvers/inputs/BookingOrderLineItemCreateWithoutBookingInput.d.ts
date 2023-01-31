import { PriceCreateNestedOneWithoutBookingLineItemsInput } from "../inputs/PriceCreateNestedOneWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemCreateWithoutBookingInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    selectedQuantity?: number | undefined;
    selectedStartDate?: Date | undefined;
    selectedEndDate?: Date | undefined;
    LineItemPrice: PriceCreateNestedOneWithoutBookingLineItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
