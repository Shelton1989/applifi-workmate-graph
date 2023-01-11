import { BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput";
import { ExperienceCreateNestedOneWithoutPriceInput } from "../inputs/ExperienceCreateNestedOneWithoutPriceInput";
export declare class PriceCreateWithoutCurrencyInput {
    id?: string | undefined;
    priceInLowestDenomination: number;
    displayPrice: string;
    details: string;
    Experience: ExperienceCreateNestedOneWithoutPriceInput;
    BookingLineItems?: BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput | undefined;
    isBasePrice?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
