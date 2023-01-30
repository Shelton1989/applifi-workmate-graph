import { CurrencyCreateNestedOneWithoutPricesInput } from "../inputs/CurrencyCreateNestedOneWithoutPricesInput";
import { ExperienceCreateNestedOneWithoutPriceInput } from "../inputs/ExperienceCreateNestedOneWithoutPriceInput";
export declare class PriceCreateWithoutBookingLineItemsInput {
    id?: string | undefined;
    priceInLowestDenomination: number;
    displayPrice: string;
    currency?: CurrencyCreateNestedOneWithoutPricesInput | undefined;
    details?: string | undefined;
    Experience: ExperienceCreateNestedOneWithoutPriceInput;
    isBasePrice?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
