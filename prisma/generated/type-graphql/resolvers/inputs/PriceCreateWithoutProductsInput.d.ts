import { CurrencyCreateNestedOneWithoutPricesInput } from "../inputs/CurrencyCreateNestedOneWithoutPricesInput";
import { OrderLineItemCreateNestedManyWithoutLineItemPriceInput } from "../inputs/OrderLineItemCreateNestedManyWithoutLineItemPriceInput";
import { ShippingMethodCreateNestedManyWithoutPriceInput } from "../inputs/ShippingMethodCreateNestedManyWithoutPriceInput";
export declare class PriceCreateWithoutProductsInput {
    id?: string | undefined;
    priceInLowestDenomination: number;
    displayPrice: string;
    currency: CurrencyCreateNestedOneWithoutPricesInput;
    ShippingMethods?: ShippingMethodCreateNestedManyWithoutPriceInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutLineItemPriceInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
