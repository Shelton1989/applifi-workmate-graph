import { BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput";
import { CurrencyCreateNestedOneWithoutPricesInput } from "../inputs/CurrencyCreateNestedOneWithoutPricesInput";
import { ExperienceCreateNestedOneWithoutPriceInput } from "../inputs/ExperienceCreateNestedOneWithoutPriceInput";
export declare class PriceCreateInput {
    id?: string | undefined;
    priceInLowestDenomination: number;
    displayPrice: string;
    currency?: CurrencyCreateNestedOneWithoutPricesInput | undefined;
    details?: string | undefined;
    Experience: ExperienceCreateNestedOneWithoutPriceInput;
    BookingLineItems?: BookingOrderLineItemCreateNestedManyWithoutLineItemPriceInput | undefined;
    isBasePrice?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
