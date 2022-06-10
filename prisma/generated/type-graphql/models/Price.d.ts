import { Currency } from "../models/Currency";
import { OrderLineItem } from "../models/OrderLineItem";
import { Product } from "../models/Product";
import { ShippingMethod } from "../models/ShippingMethod";
import { PriceCount } from "../resolvers/outputs/PriceCount";
export declare class Price {
    id: string;
    priceInLowestDenomination: number;
    displayPrice: string;
    currency?: Currency;
    currencyId: string;
    ShippingMethods?: ShippingMethod[];
    Products?: Product[];
    OrderLineItems?: OrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: PriceCount | null;
}
