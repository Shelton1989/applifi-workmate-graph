import { OrderLineItemCreateNestedManyWithoutLineItemPriceInput } from "../inputs/OrderLineItemCreateNestedManyWithoutLineItemPriceInput";
import { ProductCreateNestedManyWithoutPriceInput } from "../inputs/ProductCreateNestedManyWithoutPriceInput";
import { ShippingMethodCreateNestedManyWithoutPriceInput } from "../inputs/ShippingMethodCreateNestedManyWithoutPriceInput";
export declare class PriceCreateWithoutCurrencyInput {
    id?: string | undefined;
    priceInLowestDenomination: number;
    displayPrice: string;
    ShippingMethods?: ShippingMethodCreateNestedManyWithoutPriceInput | undefined;
    Products?: ProductCreateNestedManyWithoutPriceInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutLineItemPriceInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
