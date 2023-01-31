import { BookingOrderCreateNestedOneWithoutItemsInput } from "../inputs/BookingOrderCreateNestedOneWithoutItemsInput";
export declare class BookingOrderLineItemCreateWithoutLineItemPriceInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    Booking: BookingOrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
