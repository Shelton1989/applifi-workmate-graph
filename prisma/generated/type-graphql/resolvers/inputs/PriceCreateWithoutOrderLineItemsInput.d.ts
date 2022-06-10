import { CurrencyCreateNestedOneWithoutPricesInput } from "../inputs/CurrencyCreateNestedOneWithoutPricesInput";
import { ProductCreateNestedManyWithoutPriceInput } from "../inputs/ProductCreateNestedManyWithoutPriceInput";
import { ShippingMethodCreateNestedManyWithoutPriceInput } from "../inputs/ShippingMethodCreateNestedManyWithoutPriceInput";
export declare class PriceCreateWithoutOrderLineItemsInput {
    id?: string | undefined;
    priceInLowestDenomination: number;
    displayPrice: string;
    currency: CurrencyCreateNestedOneWithoutPricesInput;
    ShippingMethods?: ShippingMethodCreateNestedManyWithoutPriceInput | undefined;
    Products?: ProductCreateNestedManyWithoutPriceInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
