import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
import { Currency } from "../../../models/Currency";
import { Experience } from "../../../models/Experience";
import { Price } from "../../../models/Price";
import { PriceBookingLineItemsArgs } from "./args/PriceBookingLineItemsArgs";
export declare class PriceRelationsResolver {
    currency(price: Price, ctx: any): Promise<Currency>;
    Experience(price: Price, ctx: any): Promise<Experience>;
    BookingLineItems(price: Price, ctx: any, args: PriceBookingLineItemsArgs): Promise<BookingOrderLineItem[]>;
}
