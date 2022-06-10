import { CurrencyCreateNestedOneWithoutPricesInput } from "../inputs/CurrencyCreateNestedOneWithoutPricesInput";
import { OrderLineItemCreateNestedManyWithoutLineItemPriceInput } from "../inputs/OrderLineItemCreateNestedManyWithoutLineItemPriceInput";
import { ProductCreateNestedManyWithoutPriceInput } from "../inputs/ProductCreateNestedManyWithoutPriceInput";
export declare class PriceCreateWithoutShippingMethodsInput {
    id?: string | undefined;
    priceInLowestDenomination: number;
    displayPrice: string;
    currency: CurrencyCreateNestedOneWithoutPricesInput;
    Products?: ProductCreateNestedManyWithoutPriceInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutLineItemPriceInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
