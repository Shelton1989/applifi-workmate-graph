import { BookingOrderLineItem } from "../models/BookingOrderLineItem";
import { Currency } from "../models/Currency";
import { Experience } from "../models/Experience";
import { PriceCount } from "../resolvers/outputs/PriceCount";
export declare class Price {
    id: string;
    priceInLowestDenomination: number;
    displayPrice: string;
    currency?: Currency | null;
    currencyId?: string | null;
    details?: string | null;
    Experience?: Experience;
    experienceId: string;
    BookingLineItems?: BookingOrderLineItem[];
    isBasePrice: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count?: PriceCount | null;
}
