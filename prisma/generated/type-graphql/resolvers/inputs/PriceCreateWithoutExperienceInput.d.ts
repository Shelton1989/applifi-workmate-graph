import { BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput";
import { CurrencyCreateNestedOneWithoutPricesInput } from "../inputs/CurrencyCreateNestedOneWithoutPricesInput";
export declare class PriceCreateWithoutExperienceInput {
    id?: string | undefined;
    priceInLowestDenomination: number;
    displayPrice: string;
    currency: CurrencyCreateNestedOneWithoutPricesInput;
    details: string;
    BookingLineItems?: BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput | undefined;
    isBasePrice?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
